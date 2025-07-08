"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    interest: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://agro-food-tech-be.onrender.com/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          emailAddress: formData.email,
          phoneNumber: formData.phone,
          companyName: formData.company,
          interestedIn: formData.interest,
          message: formData.message,
        }),
      })

      if (!response.ok) throw new Error("Network response was not ok")

      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        interest: "",
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Form submission failed:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative max-w-xl mx-auto p-10 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.4)]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-700" />

      {!submitted ? (
        <motion.form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold text-gray-700 text-sm">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-gray-700 text-sm">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-semibold text-gray-700 text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company" className="mb-2 font-semibold text-gray-700 text-sm">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="interest" className="mb-2 font-semibold text-gray-700 text-sm">
              Interested In*
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base bg-white focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
            >
              <option value="">Select an option</option>
              <option value="wholesale">Wholesale Purchase</option>
              <option value="retail">Retail Information</option>
              <option value="distribution">Distribution Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="message" className="mb-2 font-semibold text-gray-700 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base resize-vertical min-h-[120px] focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="sm:col-span-2 bg-gradient-to-r from-green-600 to-green-800 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:translate-y-[-2px] hover:shadow-xl transition disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
            disabled={loading}
          >
            {loading ? (
              "Sending..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                Submit <Send size={16} />
              </span>
            )}
          </button>
        </motion.form>
      ) : (
        <motion.div
          className="text-center text-green-600 px-6 py-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle size={60} className="mx-auto mb-6 text-green-600" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-gray-600 max-w-md mx-auto text-lg leading-relaxed">
            Your information has been submitted successfully. Our team will contact you shortly.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default LeadForm
