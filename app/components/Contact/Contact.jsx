"use client";
import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import GlobalFooter from "@/app/Layouts/GlobalFooter";
import GlobalHeader from "@/app/Layouts/GlobalHeader";
import { sendMailUserOnly } from "@/app/Services/api-requests/sendmail";
import toast from "react-hot-toast";
import Link from "next/link";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendContactInfo(formData);
  };

  const sendContactInfo = async () => {
    try {
      setLoading(true);
      const userData = {
        toemail: formData.email,
        subject: "CERTNOW Contact Form",
        message: `Thanks for filling out your contact form successfully. We will contact you as soon as possible.`,
      };
      const res = await sendMailUserOnly(userData);
      if (res.data) {
        toast.success("Contact Form send successfully");
      }
    } catch (error) {
      toast.error("Failed to send contact form");
      console.error("Error sending contact info:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalHeader />
      <div className="min-h-screen flex justify-center items-center ">
        <div className="max-w-4xl m-3 w-full bg-gray-50 rounded-md shadow-md flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center border-b md:border-r border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <div className="flex items-center mb-4">
              <FiPhone className="mr-2 text-primary" size={20} />
              <span>123-456-7890</span>
            </div>
            <div className="flex items-center">
              <FiMail className="mr-2 text-primary" size={20} />
              <Link href="mailto:certnowhelpline@gmail.com">
                certnowhelpline@gmail.com
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading ? true : false}
                className="bg-primary text-white py-2 px-4 rounded-md hover:bg-uorangedark transition duration-300"
              >
                {loading ? "Submiting.... " : "Submit "}
              </button>
            </form>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  );
};

export default Contact;
