import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Configure nodemailer transporter
    // You'll need to set these environment variables in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your app-specific password or password
      },
    });

    // Format budget value for display
    const formatBudget = (budget: string) => {
      const budgetMap: { [key: string]: string } = {
        "below-2000": "Below $2,000",
        "2000-5000": "$2,000 - $5,000",
        "5000-10000": "$5,000 - $10,000",
        "10000-25000": "$10,000 - $25,000",
        "above-25000": "Above $25,000",
      };
      return budgetMap[budget] || budget || "N/A";
    };

    // Format the email body for B2B inquiry
    let emailBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #000;">New B2B Diamond Inquiry</h2>
        <hr style="border: 1px solid #ddd; margin: 20px 0;">
        
        <h3 style="color: #000; margin-top: 20px;">Contact & Company Details</h3>
        <p><strong>Full Name:</strong> ${data.fullName || "N/A"}</p>
        <p><strong>Company Name:</strong> ${data.companyName || "N/A"}</p>
        <p><strong>City & State:</strong> ${data.cityState || "N/A"}</p>
        <p><strong>Country:</strong> ${data.country || "N/A"}</p>
        <p><strong>Email:</strong> ${data.email ? `<a href="mailto:${data.email}">${data.email}</a>` : "N/A"}</p>
        <p><strong>Country (Secondary):</strong> ${data.country2 || "N/A"}</p>
        
        <h4 style="margin-top: 15px;">Certifications:</h4>
        <ul>
          ${data.certifications?.GIA ? "<li>GIA</li>" : ""}
          ${data.certifications?.IGI ? "<li>IGI</li>" : ""}
          ${data.certifications?.HRD ? "<li>HRD</li>" : ""}
          ${data.certifications?.noCertificate ? "<li>No Certificate</li>" : ""}
          ${!data.certifications?.GIA && !data.certifications?.IGI && !data.certifications?.HRD && !data.certifications?.noCertificate ? "<li>None selected</li>" : ""}
        </ul>
        
        <h3 style="color: #000; margin-top: 30px;">Diamond Preferences & Order Details</h3>
        <p><strong>WhatsApp Number:</strong> ${data.whatsapp || "N/A"}</p>
        <p><strong>Business Website:</strong> ${data.website ? `<a href="${data.website.startsWith('http') ? data.website : 'https://' + data.website}" target="_blank">${data.website}</a>` : "N/A"}</p>
        
        <h4 style="margin-top: 15px;">Buyer Type:</h4>
        <ul>
          ${data.buyerType?.jeweler ? "<li>Jeweler / Retailer</li>" : ""}
          ${data.buyerType?.wholesaler ? "<li>Wholesaler</li>" : ""}
          ${data.buyerType?.manufacturer ? "<li>Manufacturer</li>" : ""}
          ${data.buyerType?.exporter ? "<li>Exporter</li>" : ""}
          ${!data.buyerType?.jeweler && !data.buyerType?.wholesaler && !data.buyerType?.manufacturer && !data.buyerType?.exporter ? "<li>None selected</li>" : ""}
        </ul>
        
        <p><strong>Diamond Shape:</strong> ${data.diamondShape || "N/A"}</p>
        <p><strong>Carat Range:</strong> ${data.caratRange || "N/A"}</p>
        <p><strong>Clarity Range:</strong> ${data.clarityRange || "N/A"}</p>
        <p><strong>Budget:</strong> ${formatBudget(data.budget)}</p>
        
        <h4 style="margin-top: 15px;">Purpose of Purchase:</h4>
        <ul>
          ${data.purpose?.clientOrder ? "<li>Client Order / Request</li>" : ""}
          ${data.purpose?.resale ? "<li>Resale / Inventory</li>" : ""}
          ${data.purpose?.priceComparison ? "<li>Price Comparison Only</li>" : ""}
          ${!data.purpose?.clientOrder && !data.purpose?.resale && !data.purpose?.priceComparison ? "<li>None selected</li>" : ""}
        </ul>
        
        <h4 style="margin-top: 15px;">Additional Details:</h4>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.additionalDetails || "No additional details provided."}</p>
      </div>
    `;

    // Handle simple contact form data (from ContactForm component)
    if (data.name && !data.fullName) {
      emailBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #000;">New Contact Form Inquiry</h2>
          <hr style="border: 1px solid #ddd; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name || "N/A"}</p>
          <p><strong>Email:</strong> ${data.email ? `<a href="mailto:${data.email}">${data.email}</a>` : "N/A"}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message || "N/A"}</p>
        </div>
      `;
    }

    // Email configuration
    const mailOptions = {
      from: process.env.SMTP_USER, // Sender address
      to: process.env.RECIPIENT_EMAIL || "your-email@example.com", // Recipient email (embedded email)
      subject: data.fullName
        ? `B2B Diamond Inquiry from ${data.companyName || data.fullName}`
        : `Contact Form Inquiry from ${data.name || "Unknown"}`,
      html: emailBody,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}

