"use client"

import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Package, Award, ShoppingCart, Star, CheckCircle, MapPin, Leaf } from "lucide-react"

const Brands = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const brands = [
    {
      id: 1,
      name: "Corn Master",
      category: "corn",
      description: "Premium quality sweet corn kernels, flash-frozen to preserve natural sweetness and nutrients.",
      logo: "/placeholder.svg?height=120&width=200",
      established: "2015",
      products: [
        {
          id: 1,
          name: "Corn Master 1kg",
          weight: "1 kg",
          image: "/placeholder.svg?height=300&width=300",
          availability: "In Stock",
          features: ["Premium Quality", "Flash Frozen", "No Preservatives", "Farm Fresh"],
          description: "Our flagship 1kg pack of premium sweet corn kernels, perfect for families and restaurants.",
        },
        {
          id: 2,
          name: "Corn Master 500gm",
          weight: "500 gm",
          image: "/placeholder.svg?height=300&width=300",
          availability: "In Stock",
          features: ["Premium Quality", "Flash Frozen", "No Preservatives", "Convenient Size"],
          description: "Perfect portion size for small families, maintaining the same premium quality.",
        },
      ],
    },
    {
      id: 2,
      name: "Krushi Ratna",
      category: "vegetables",
      description: "Traditional farming meets modern technology. Premium frozen vegetables from trusted farms.",
      logo: "/placeholder.svg?height=120&width=200",
      established: "2018",
      products: [
        {
          id: 3,
          name: "Krushi Ratna Green Peas 1kg",
          weight: "1 kg",
          image: "/placeholder.svg?height=300&width=300",
          availability: "In Stock",
          features: ["Organic Certified", "Hand Picked", "Flash Frozen", "Rich in Protein"],
          description: "Premium green peas sourced from organic farms, rich in protein and essential nutrients.",
        },
      ],
    },
    {
      id: 3,
      name: "Green Peas Premium",
      category: "peas",
      description: "Specially curated green peas collection offering various pack sizes for different needs.",
      logo: "/placeholder.svg?height=120&width=200",
      established: "2020",
      products: [
        {
          id: 4,
          name: "Green Peas 200gm",
          weight: "200 gm",
          image: "/placeholder.svg?height=300&width=300",
          availability: "In Stock",
          features: ["Small Pack", "Fresh Quality", "Quick Cook", "Nutrient Rich"],
          description: "Convenient small pack perfect for single servings or small portions.",
        },
      ],
    },
    {
      id: 4,
      name: "Baby Corn Deluxe",
      category: "specialty",
      description: "Tender baby corn harvested at the perfect stage for optimal taste and texture.",
      logo: "/placeholder.svg?height=120&width=200",
      established: "2019",
      products: [
        {
          id: 5,
          name: "Baby Corn 500gm",
          weight: "500 gm",
          image: "/placeholder.svg?height=300&width=300",
          availability: "In Stock",
          features: ["Tender & Sweet", "Restaurant Grade", "Flash Frozen", "Versatile Use"],
          description: "Premium baby corn perfect for stir-fries, curries, and gourmet dishes.",
        },
        {
          id: 6,
          name: "Corn Cob Premium",
          weight: "Whole Cob",
          image: "/placeholder.svg?height=300&width=300",
          availability: "In Stock",
          features: ["Whole Cob", "BBQ Ready", "Natural Sweet", "Farm Fresh"],
          description: "Whole corn cobs perfect for grilling, boiling, or roasting. Natural farm-fresh taste.",
        },
      ],
    },
  ]

  const categories = [
    { id: "all", name: "All Brands", icon: <Package size={20} /> },
    { id: "corn", name: "Corn Products", icon: <Award size={20} /> },
    { id: "vegetables", name: "Vegetables", icon: <Leaf size={20} /> },
    { id: "peas", name: "Peas", icon: <Star size={20} /> },
    { id: "specialty", name: "Specialty", icon: <ShoppingCart size={20} /> },
  ]

  const filteredBrands = activeCategory === "all" ? brands : brands.filter((brand) => brand.category === activeCategory)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our Registered Brands - FrozenDelights Premium Products",
    description:
      "Discover our registered brand portfolio including Corn Master, Krushi Ratna, and specialty frozen products.",
    url: "https://frozendelights.com/brands",
  }

  return (
    <>
      <Helmet>
        <title>Our Registered Brands - Premium Frozen Food Products | FrozenDelights</title>
        <meta
          name="description"
          content="Explore our registered brand portfolio including Corn Master, Krushi Ratna, Green Peas Premium, and Baby Corn Deluxe. Premium frozen food products with guaranteed quality."
        />
        <meta
          name="keywords"
          content="corn master, krushi ratna, frozen corn brands, green peas, baby corn, registered brands, premium frozen food"
        />
        <link rel="canonical" href="https://frozendelights.com/brands" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-200 via-yellow-100 to-white py-24 text-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-green-800 mb-6">
                Our Registered Brands
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our premium collection of registered brands, each crafted with care and commitment to deliver the finest frozen food products to your table.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-md border border-green-200 text-green-700 font-semibold">
                  <Award size={24} /> 4+ Registered Brands
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-md border border-green-200 text-green-700 font-semibold">
                  <Package size={24} /> 15+ Product Variants
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-md border border-green-200 text-green-700 font-semibold">
                  <CheckCircle size={24} /> 100% Quality Assured
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-gray-900 py-16 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold border transition-all duration-300 shadow-sm ${
                    activeCategory === category.id
                      ? "bg-gradient-to-br from-green-500 to-yellow-400 text-white border-green-600 shadow-md"
                      : "bg-white text-gray-700 border-green-200 hover:text-green-600 hover:shadow-md"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 grid gap-16">
            {filteredBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:border-green-200 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-[auto_1fr] gap-8 p-10 bg-green-50 border-b border-green-100 items-center">
                  <div className="w-32 h-20 bg-white rounded-xl flex items-center justify-center shadow-md border border-green-100">
                    <img src={brand.logo || "/placeholder.svg"} alt={`${brand.name} logo`} className="max-w-[100px] max-h-[60px] object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">{brand.description}</p>
                    <div className="flex gap-4 text-sm font-semibold text-green-600">
                      <span className="bg-white border border-green-200 px-3 py-1 rounded-full">Est. {brand.established}</span>
                      <span className="bg-white border border-green-200 px-3 py-1 rounded-full">{brand.products.length} Products</span>
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6 relative inline-block">
                    Available Products
                    <span className="absolute left-0 bottom-[-8px] w-12 h-[3px] bg-gradient-to-r from-yellow-300 to-yellow-500 rounded"></span>
                  </h4>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {brand.products.map((product) => (
                      <div key={product.id} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                        <div className="relative h-48 overflow-hidden">
                          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                          <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                            <CheckCircle size={14} /> {product.availability}
                          </div>
                        </div>
                        <div className="p-6">
                          <h5 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h5>
                          <p className="text-green-600 font-semibold text-sm mb-2">{product.weight}</p>
                          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{product.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.features.map((feature, idx) => (
                              <span key={idx} className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-green-500 to-yellow-400 text-white px-5 py-3 rounded-lg font-semibold hover:shadow-md transition">
                            <ShoppingCart size={16} /> Request Quote
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Availability Section */}
        <section className="bg-gray-800 py-24">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-4">Product Availability</h2>
              <p className="text-lg text-gray-300 mb-16">Our registered brands are available across multiple channels and locations</p>

              <div className="grid gap-8 md:grid-cols-3 mb-20">
                <div className="bg-white text-gray-800 p-10 rounded-2xl text-center shadow-lg border border-green-100 hover:shadow-xl transition">
                  <MapPin size={32} className="text-green-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Nationwide Distribution</h3>
                  <p>Available in 2,500+ retail stores across all major cities and towns</p>
                </div>
                <div className="bg-white text-gray-800 p-10 rounded-2xl text-center shadow-lg border border-green-100 hover:shadow-xl transition">
                  <Package size={32} className="text-green-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Wholesale Supply</h3>
                  <p>Direct wholesale supply to restaurants, hotels, and food service providers</p>
                </div>
                <div className="bg-white text-gray-800 p-10 rounded-2xl text-center shadow-lg border border-green-100 hover:shadow-xl transition">
                  <ShoppingCart size={32} className="text-green-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Online Ordering</h3>
                  <p>Easy online ordering system for bulk purchases and regular supply</p>
                </div>
              </div>

              <div className="bg-gray-700 p-12 rounded-3xl border border-gray-600">
                <h3 className="text-3xl font-bold mb-4">Ready to Stock Our Brands?</h3>
                <p className="text-lg text-gray-300 mb-8">Contact our sales team for wholesale pricing and distribution opportunities</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="bg-gradient-to-br from-green-500 to-yellow-400 text-white px-8 py-3 rounded-lg font-semibold shadow-md">Contact Sales Team</button>
                  <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold border border-green-200 shadow-sm">Download Product Catalog</button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Brands