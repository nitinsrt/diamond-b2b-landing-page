"use client";
import { useState } from "react";

export default function B2BInquiryForm() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    cityState: "",
    country: "USA",
    email: "",
    country2: "USA",
    certifications: {
      GIA: false,
      IGI: false,
      HRD: false,
      noCertificate: false,
    },
    whatsapp: "",
    website: "",
    buyerType: {
      jeweler: false,
      wholesaler: false,
      manufacturer: false,
      exporter: false,
    },
    diamondShape: "Round",
    caratRange: "",
    clarityRange: "VVS1, VVS2",
    budget: "",
    purpose: {
      clientOrder: false,
      resale: false,
      priceComparison: false,
    },
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name.startsWith("certification")) {
        setFormData((prev) => ({
          ...prev,
          certifications: {
            ...prev.certifications,
            [name.replace("certification-", "")]: checked,
          },
        }));
      } else if (name.startsWith("buyerType")) {
        setFormData((prev) => ({
          ...prev,
          buyerType: {
            ...prev.buyerType,
            [name.replace("buyerType-", "")]: checked,
          },
        }));
      } else if (name.startsWith("purpose")) {
        setFormData((prev) => ({
          ...prev,
          purpose: {
            ...prev.purpose,
            [name.replace("purpose-", "")]: checked,
          },
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const submitData = {
      ...formData,
    };

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    });

    if (res.ok) {
      setStatus("Thank you! We will contact you shortly.");
      // Reset form
      setFormData({
        fullName: "",
        companyName: "",
        cityState: "",
        country: "USA",
        email: "",
        country2: "USA",
        certifications: {
          GIA: false,
          IGI: false,
          HRD: false,
          noCertificate: false,
        },
        whatsapp: "",
        website: "",
        buyerType: {
          jeweler: false,
          wholesaler: false,
          manufacturer: false,
          exporter: false,
        },
        diamondShape: "Round",
        caratRange: "",
        clarityRange: "VVS1, VVS2",
        budget: "",
        purpose: {
          clientOrder: false,
          resale: false,
          priceComparison: false,
        },
        additionalDetails: "",
      });
    } else {
      setStatus("Error sending message.");
    }
  }

  return (
    <section id="enquiry" className="py-20 bg-black text-white px-6">
      <h2 className="text-4xl text-center font-semibold mb-2">
        For B2B & serious buyers only
      </h2>

      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto mt-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact & Company Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium mb-4">Contact & Company Details</h3>

            <div>
              <label className="block mb-2 text-sm">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Company Name <span className="text-red-400">*</span>
              </label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="ABC Diamonds Ltd."
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">
                City & State <span className="text-red-400">*</span>
              </label>
              <input
                name="cityState"
                value={formData.cityState}
                onChange={handleChange}
                placeholder="New York, NY"
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Country <span className="text-red-400">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
                required
              >
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="UAE">UAE</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm">Email & Address</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@email.com"
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Country <span className="text-red-400">*</span>
              </label>
              <select
                name="country2"
                value={formData.country2}
                onChange={handleChange}
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
                required
              >
                <option value="USA">🇺🇸 USA</option>
                <option value="UK">🇬🇧 UK</option>
                <option value="Canada">🇨🇦 Canada</option>
                <option value="Australia">🇦🇺 Australia</option>
                <option value="India">🇮🇳 India</option>
                <option value="UAE">🇦🇪 UAE</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm">Certifications</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="certification-GIA"
                    checked={formData.certifications.GIA}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>GIA</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="certification-IGI"
                    checked={formData.certifications.IGI}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>IGI</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="certification-HRD"
                    checked={formData.certifications.HRD}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>HRD</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="certification-noCertificate"
                    checked={formData.certifications.noCertificate}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>No Certificate</span>
                </label>
              </div>
            </div>

            <p className="text-sm text-gray-400 italic">
              *Minimum order: 0.50 ct. Bulk & wholesale inquiries only.
            </p>
          </div>

          {/* Right Column - Diamond Preferences & Order Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium mb-4">
              Diamond Preferences & Order Details
            </h3>

            <div>
              <label className="block mb-2 text-sm">
                WhatsApp Number <span className="text-red-400">*</span>
              </label>
              <input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+1 212 555 6789"
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Business Website</label>
              <input
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="www.abcdiamonds.com"
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Buyer Type <span className="text-red-400">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="buyerType-jeweler"
                    checked={formData.buyerType.jeweler}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>Jeweler / Retailer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="buyerType-wholesaler"
                    checked={formData.buyerType.wholesaler}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>Wholesaler</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="buyerType-manufacturer"
                    checked={formData.buyerType.manufacturer}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>Manufacturer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="buyerType-exporter"
                    checked={formData.buyerType.exporter}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>Exporter</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Diamond Shape <span className="text-red-400">*</span>
              </label>
              <select
                name="diamondShape"
                value={formData.diamondShape}
                onChange={handleChange}
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
                required
              >
                <option value="Round">Round</option>
                <option value="Princess">Princess</option>
                <option value="Emerald">Emerald</option>
                <option value="Asscher">Asscher</option>
                <option value="Cushion">Cushion</option>
                <option value="Radiant">Radiant</option>
                <option value="Oval">Oval</option>
                <option value="Pear">Pear</option>
                <option value="Marquise">Marquise</option>
                <option value="Heart">Heart</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Carat Range <span className="text-red-400">*</span>
              </label>
              <input
                name="caratRange"
                value={formData.caratRange}
                onChange={handleChange}
                placeholder="1.00ct - 1.50ct"
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Clarity Range <span className="text-red-400">*</span>
              </label>
              <select
                name="clarityRange"
                value={formData.clarityRange}
                onChange={handleChange}
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
                required
              >
                <option value="FL, IF">FL, IF</option>
                <option value="VVS1, VVS2">VVS1, VVS2</option>
                <option value="VS1, VS2">VS1, VS2</option>
                <option value="SI1, SI2">SI1, SI2</option>
                <option value="I1, I2, I3">I1, I2, I3</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Budget <span className="text-red-400">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value="below-2000"
                    checked={formData.budget === "below-2000"}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <span>Below $2,000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value="2000-5000"
                    checked={formData.budget === "2000-5000"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span>$2,000 - $5,000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value="5000-10000"
                    checked={formData.budget === "5000-10000"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span>$5,000 - $10,000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value="10000-25000"
                    checked={formData.budget === "10000-25000"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span>$10,000 - $25,000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value="above-25000"
                    checked={formData.budget === "above-25000"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span>Above $25,000</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm">Purpose of Purchase</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="purpose-clientOrder"
                    checked={formData.purpose.clientOrder}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>Client Order / Request</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="purpose-resale"
                    checked={formData.purpose.resale}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>Resale / Inventory</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="purpose-priceComparison"
                    checked={formData.purpose.priceComparison}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-gray-900 border-gray-700"
                  />
                  <span>Price Comparison Only</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm">Additional Details</label>
              <textarea
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                placeholder="Looking for pieces of round diamonds in 1.00ct-1.20ct, VVS1 clarity, DEF color for an urgent bulk order. Please provide verified pricing."
                rows="4"
                className="w-full p-4 rounded bg-gray-900 border border-gray-700"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-6">
            * This form is for serious buyers only, incomplete or non-business
            inquiries may not receive a response.
          </p>
          <button
            type="submit"
            className="w-full max-w-md mx-auto bg-white text-black py-4 rounded font-medium hover:bg-gray-200 transition text-lg cursor-pointer"
          >
            Request Verified Price
          </button>
          <p className="text-sm text-gray-400 mt-4 italic">
            * Minimum order: 0.50 ct. Bulk & wholesale inquiries only.
          </p>
        </div>
      </form>

      {status && <p className="text-center mt-6 text-green-400">{status}</p>}
    </section>
  );
}

