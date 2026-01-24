"use client";

import Button from "../_components/Button";

export default function Page() {
  // Submit handler using FormData
  async function handleSubmit(e) {
    e.preventDefault();

    // Grab all form fields automatically
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); // converts to { name, email, message }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Message sent!");
        e.target.reset(); // clear the form
      } else {
        alert(result.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="md:w-[35rem] lg:w-[40rem] w-[20rem] mt-[5rem]">
        <h1 className="text-center uppercase">Contact us</h1>

        <div className="pt-8 pb-8 text-center">
          <h2 className="font-bold">Have a suggestion or a prayer request?</h2>
          <p>We’d love to hear from you. God bless you.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4 mt-8">
            <label className="pb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border outline-red-950 px-2 py-1 rounded focus:outline-none focus:ring-1 focus:ring-[#ba68c8]"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="pb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-1 focus:ring-[#ba68c8]"
            />
          </div>

          <div className="flex flex-col">
            <label className="pb-2">Message</label>
            <textarea
              name="message"
              required
              className="w-full border h-52 px-2 py-1 rounded focus:outline-none focus:ring-1 focus:ring-[#ba68c8]"
            />
          </div>

          <div className="mb-[5rem] grid justify-items-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
