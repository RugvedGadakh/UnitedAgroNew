"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://agro-food-tech-be.onrender.com/api/products")
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])




  const filteredProducts =
    filter === "all" ? products : products.filter((product) => product.category === filter)

  const shouldCenter = filteredProducts.length < 4;

  const handleFilterChange = (category) => {
    setFilter(category)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-br from-green-100 to-yellow-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#fde68a_0%,transparent_50%),radial-gradient(circle_at_70%_30%,#bbf7d0_0%,transparent_50%)] opacity-60 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-yellow-600 bg-clip-text text-transparent mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 font-medium"
          >
            Discover our range of premium quality frozen food products
          </motion.p>
        </div>
      </section>

      {/* Product Filters & List */}
      <section className="bg-white py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mb-16">
            {["all", "vegetables", "fruits", "mixed"].map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-3 text-base font-semibold rounded-full border-2 transition-all duration-300 shadow-sm ${filter === category
                  ? "bg-gradient-to-r from-green-400 to-yellow-400 text-white border-green-400 shadow-md hover:from-yellow-400 hover:to-yellow-500"
                  : "bg-white text-gray-700 border-green-200 hover:border-green-500 hover:text-green-600 hover:-translate-y-1"
                  }`}
              >
                {category === "all" ? "All Products" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Loading Spinner */}
          {loading ? (
            <div className="text-center bg-green-50 p-12 rounded-2xl">
              <div className="w-14 h-14 border-4 border-green-300 border-t-green-600 rounded-full animate-spin mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg font-medium">Loading products...</p>
            </div>
          ) : (
            <>
              {/* Product Grid */}
              <div className="w-full">
                <div
                  className={`${shouldCenter
                      ? "flex justify-center gap-10 flex-wrap max-w-[1024px] mx-auto"
                      : "grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    }`}
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product._id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full sm:w-[320px]"
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              </div>


              {/* No Products Message */}
              {filteredProducts.length === 0 && (
                <div className="text-center bg-yellow-50 border border-yellow-200 rounded-2xl p-12 mt-12">
                  <p className="text-yellow-700 text-lg font-semibold">No products found in this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products
