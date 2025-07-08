"use client"

import WhyChooseUs from "./WhyChooseUs"

const FeaturesSection = () => {
  

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Choose Our Premium Products?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We take pride in delivering the highest quality frozen corn and vegetable products, preserving nature's
          goodness from farm to your table.
        </p>

        <div>
          <WhyChooseUs/>
        </div>

        
      </div>
    </section>
  )
}

export default FeaturesSection
