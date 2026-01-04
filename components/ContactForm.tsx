"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    setStatus("Sending...");

    const res = await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) setStatus("Thank you! We will contact you shortly.");
    else setStatus("Error sending message.");
  }

  return (
    <section id="enquiry" className="py-20 bg-black text-white px-6">
      <h2 className="text-4xl text-center font-semibold">Enquire Now</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mt-10 space-y-6"
      >
        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-4 rounded bg-gray-900 border border-gray-700"
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="w-full p-4 rounded bg-gray-900 border border-gray-700"
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          className="w-full p-4 rounded bg-gray-900 border border-gray-700"
        />
        <textarea
          name="message"
          placeholder="What type of diamonds are you looking for?"
          rows="4"
          className="w-full p-4 rounded bg-gray-900 border border-gray-700"
        />

        <button className="w-full bg-white text-black py-4 rounded font-medium hover:bg-gray-200 transition">
          Submit
        </button>
      </form>

      {status && <p className="text-center mt-6">{status}</p>}
    </section>
  );
}
