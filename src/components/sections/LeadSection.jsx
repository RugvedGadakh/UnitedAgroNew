"use client"

import { motion } from "framer-motion"
import LeadForm from "../LeadForm"

const LeadSection = () => {
  return (
<section className="section lead-section !bg-green-900 !text-white rounded-t-3xl">
      <div className="container">
        <div className="lead-content">
          <motion.div
            className="lead-text !text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="!text-green-100">Partner With Us Today</h2>
            <p className="!text-white">
              Ready to bring premium frozen corn and vegetables to your customers? Get in touch with our team for
              wholesale pricing, custom packaging, and distribution partnerships.
            </p>
            <ul className="lead-benefits !text-white">
              <li className="!text-green-200">
                <span className="!text-green-300">✓</span> Competitive wholesale pricing
              </li>
              <li className="!text-green-200">
                <span className="!text-green-300">✓</span> Complete nutritional specifications
              </li>
              <li className="!text-green-200">
                <span className="!text-green-300">✓</span> Custom packaging solutions
              </li>
              <li className="!text-green-200">
                <span className="!text-green-300">✓</span> Flexible distribution partnerships
              </li>
              <li className="!text-green-200">
                <span className="!text-green-300">✓</span> Dedicated account management
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="lead-form-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LeadSection
