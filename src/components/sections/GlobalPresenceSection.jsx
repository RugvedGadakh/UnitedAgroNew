"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import { useState } from "react"
import { hasFlag } from "country-flag-icons"
import "country-flag-icons/react/3x2"

const GlobalPresenceSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const exportCountries = [
    { name: "Russia", countryCode: "RU", region: "Europe/Asia" },
    { name: "Germany", countryCode: "DE", region: "Europe" },
    { name: "France", countryCode: "FR", region: "Europe" },
    { name: "Dubai", countryCode: "AE", region: "Middle East" },
    { name: "Saudi Arabia", countryCode: "SA", region: "Middle East" },
    { name: "UAE", countryCode: "AE", region: "Middle East" },
    { name: "Oman", countryCode: "OM", region: "Middle East" },
    { name: "Iran", countryCode: "IR", region: "Middle East" },
    { name: "Iraq", countryCode: "IQ", region: "Middle East" },
    { name: "Nepal", countryCode: "NP", region: "Asia" },
    { name: "Sri Lanka", countryCode: "LK", region: "Asia" },
  ]

  const doubledExportCountries = [...exportCountries, ...exportCountries]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Global Reach, Local Quality
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Serving premium frozen products to customers across four continents with the same commitment to quality
        </p>

        {/* Global Export Network Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/Images/card3.jpg" // Replace with correct image path if needed
              alt="Global Export"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-600" size={28} />
              Global Export Network
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At United Agro Foods, we’ve built a reliable and efficient global export infrastructure that spans continents.
              Our premium frozen vegetables and corn are transported through a meticulously managed <span className="text-green-600 font-medium">cold chain</span> 
              to ensure they reach every destination in peak condition. From regional distributors to major retailers, 
              we deliver consistent <span className="text-green-600 font-medium">freshness</span>, <span className="text-green-600 font-medium">quality</span>, and <span className="text-green-600 font-medium">trust</span> across international borders.
            </p>
          </motion.div>
        </div>

        {/* Export Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Export Destinations</h3>

          <div className="relative group overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
              {doubledExportCountries.map((country, index) => (
                <div
                  key={`${country.name}-${index}`}
                  className={`flex-shrink-0 min-w-[150px] p-4 text-center transition-all duration-200 cursor-pointer ${
                    selectedCountry?.countryCode === country.countryCode
                      ? 'bg-green-100 border-2 border-green-300'
                      : 'hover:bg-green-50'
                  }`}
                  onClick={() => setSelectedCountry(country)}
                >
                  <div className="w-12 h-8 mx-auto mb-2">
                    {hasFlag(country.countryCode) && (
                      <img
                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.countryCode}.svg`}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <h4 className="text-sm font-medium text-gray-800">{country.name}</h4>
                  <p className="text-xs text-gray-500">{country.region}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalPresenceSection
