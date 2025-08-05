"use client"

import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  Award,
  Package,
  ShoppingCart,
  CheckCircle,
  Leaf,
  Star,
} from "lucide-react"

const Brands = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const brands = [
    {
      id: 1,
      name: "Corn Master",
      category: "corn",
      description:
        "Premium quality sweet corn kernels, flash-frozen to preserve natural sweetness and nutrients.",
      products: [
        {
          id: 1,
          name: "Corn Master",
          weight: "500gm And 1kg",
          image:
            "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752993717/sweetcorn_master_n9ghfk.png",
          availability: "In Stock",
          features: [
            "Premium Quality",
            "Flash Frozen",
            "No Preservatives",
            "Convenient Size",
          ],
          description:
            "Perfect portion size for small families, maintaining the same premium quality.",
        },
      ],
    },
    {
      id: 2,
      name: "Krushi Ratna",
      category: "corn",
      description:
        "Traditional farming meets modern technology. Premium frozen vegetables from trusted farms.",
      products: [
        {
          id: 2,
          name: "Krushi Ratna Sweet Corn",
          weight: "500gm and 1kg",
          image:
            "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752994064/krushiRatna_Corn_vkesce.png",
          availability: "In Stock",
          features: ["Organic Certified", "Hand Picked", "Flash Frozen"],
          description:
            "Tender sweet corn harvested at the perfect stage for optimal taste and texture.",
        },
      ],
    },
    {
      id: 3,
      name: "Frozen Green Peas",
      category: "peas",
      description:
        "Curated green peas collection offering various pack sizes for different needs.",
      products: [
        {
          id: 3,
          name: "Green Peas",
          weight: "200gm, 500gm and 1kg",
          image:
            "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752765000/greenpeaspacket_byucb2.jpg",
          availability: "In Stock",
          features: ["Fresh Quality", "Quick Cook", "Nutrient Rich"],
          description:
            "Naturally sweet and tender, perfect for gravies, fried rice, and snacks.",
        },
      ],
    },
    {
      id: 4,
      name: "Mix Veg",
      category: "vegetables",
      description: "A colorful blend of premium vegetables including carrots, peas, corn, and green beans.",

      products: [
        {
          id: 1,
          name: "Frozen Mix Veg",
          weight: "1kg standard pack",
          image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752765000/mixvegpacket_ocmehw.jpg",
          availability: "In Stock",
          features: ["Tender & Sweet", "Restaurant Grade", "Flash Frozen", "Versatile Use"],
          description: "A healthy mix of premium vegetables for pulao, soups, parathas, and more.",
        },

      ],
    },
    {
      id: 5,
      name: "Baby Corn",
      category: "corn",
      description: "",

      products: [
        {
          id: 1,
          name: "Baby Corn",
          weight: "500gm amd 1kg",
          image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752765635/WhatsApp_Image_2025-07-10_at_08.49.42_e7a148d2_imr22t.jpg",
          availability: "In Stock",
          features: ["Tender & Sweet", "Restaurant Grade", "Flash Frozen", "Versatile Use"],
          description: "Crisp, young corn ideal for stir-fries, oriented dishes, and salad",
        },

      ],
    },
  ]

  const categories = [
    { id: "all", label: "All Brands", icon: <Package size={16} /> },
    { id: "corn", label: "Corn", icon: <Award size={16} /> },
    { id: "vegetables", label: "Vegetables", icon: <Leaf size={16} /> },
    { id: "peas", label: "Peas", icon: <Star size={16} /> },
  ]

  const filteredBrands =
    activeCategory === "all"
      ? brands
      : brands.filter((brand) => brand.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Our Brands | United Agro Food</title>
        <meta
          name="description"
          content="Explore our premium frozen food brands like Corn Master, Krushi Ratna, and more."
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-white py-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Our Registered Brands
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mt-4">
            Discover premium frozen products under our trusted brands, crafted
            with care to bring freshness to every home.
          </p>
        </section>

        {/* Filter */}
        <section className="py-8">
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium transition ${activeCategory === cat.id
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-green-400 hover:text-green-600"
                  }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Brand Cards */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {filteredBrands.map((brand) => (
              <div key={brand.id}>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {brand.name}
                </h2>
                <p className="text-gray-600 mb-6">{brand.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {brand.products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
                    >
                      <div className="relative h-64">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle size={14} /> {product.availability}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-sm text-green-600 font-medium mb-2">
                          {product.weight}
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.map((feat, i) => (
                            <span
                              key={i}
                              className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                        <Link
                          to="/contact"
                          className="w-full block text-center bg-gradient-to-r from-green-500 to-yellow-400 text-white py-2 rounded-md font-semibold"
                        >
                          <ShoppingCart size={16} className="inline mr-1" />
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Brands
