"use client"

import { CheckCircle, MapPin, Truck, Users, Award, Globe, Building2, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

const clients = [
  {
    name: "Bharat Store",
    location: "Gurgaon, Haryana",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Retail Chain",
    partnership: "2019",
  },
  {
    name: "SMC Foods Ltd. (Madhusudan)",
    location: "New Delhi",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Food Processing",
    partnership: "2020",
  },
  {
    name: "Pal Fresh",
    location: "Uttarakhand",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Fresh Foods",
    partnership: "2018",
  },
  {
    name: "Keventer Agro Ltd.",
    location: "Kolkata, West Bengal",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Agriculture",
    partnership: "2021",
  },
  {
    name: "Solitaire Drugs and Pharma Pvt. Ltd.",
    location: "Uttarakhand",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Pharmaceuticals",
    partnership: "2020",
  },
  {
    name: "Welga Foods Ltd.",
    location: "Uttar Pradesh",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Food Manufacturing",
    partnership: "2019",
  },
  {
    name: "Nufarm Frozen Foods Pvt. Ltd.",
    location: "Uttar Pradesh",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Frozen Foods",
    partnership: "2022",
  },
]

const states = [
  "Gujarat",
  "Rajasthan",
  "Delhi",
  "Haryana",
  "Punjab",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Karnataka",
  "Andhra Pradesh",
  "West Bengal",
  "Tamil Nadu",
  "Uttarakhand",
  "Kerala",
  "Odisha",
]

const metrics = [
  { value: "50+", label: "Active Clients", icon: Users },
  { value: "14", label: "States Covered", icon: Globe },
  { value: "100%", label: "Delivery Success", icon: Truck },
  { value: "12+", label: "Years Experience", icon: TrendingUp },
]

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white text-gray-900 py-24 px-6 md:px-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 mb-8">
            <Award className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Our Trusted Partners</h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            United Agro Frozen Food Products Pvt. Ltd. delivers excellence across India through strategic partnerships
            and robust distribution networks.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`text-center border-l-4 border-green-600 pl-6 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <metric.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Distribution Network */}
        <div className="mb-24">
          <div className="flex items-center mb-12">
            <div className="w-1 h-12 bg-green-600 mr-6"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Distribution Network</h2>
              <p className="text-gray-600 mt-2">Comprehensive coverage across Indian markets</p>
            </div>
          </div>

          {/* Network Overview */}
          <div className="bg-gray-50 border border-gray-200 p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Building2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cold Chain Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our advanced cold-chain infrastructure ensures product integrity from source to destination,
                  maintaining optimal temperatures throughout the supply chain across all operational states.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6">
                <img
                  src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752995078/Screenshot_2025-07-20_123336_akzxah.png"
                  alt="Distribution network map"
                  className="w-full h-85 object-cover"
                />
              </div>
            </div>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {states.map((state, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 hover:border-green-600 hover:bg-green-50 px-4 py-3 text-center transition-all duration-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-sm font-medium text-gray-700">{state}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gray-900 text-white -mx-6 md:-mx-20 px-6 md:px-20 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partnership Excellence</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Delivering value through operational excellence and strategic collaboration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Truck,
                  title: "Logistics Excellence",
                  description: "Advanced cold-chain infrastructure with 99.2% delivery success rate",
                },
                {
                  icon: CheckCircle,
                  title: "Quality Assurance",
                  description: "ISO-certified processes ensuring consistent product quality standards",
                },
                {
                  icon: Users,
                  title: "Dedicated Support",
                  description: "Professional account management with 24/7 customer service availability",
                },
                {
                  icon: Globe,
                  title: "Market Reach",
                  description: "Comprehensive distribution network spanning 14+ states across India",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`border-l-4 border-green-500 pl-6 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <benefit.icon className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-400 italic">"United Agro – Precision in delivery, excellence in partnership"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
