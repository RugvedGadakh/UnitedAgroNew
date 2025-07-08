"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Star, ArrowRight } from "lucide-react"
import ProductCard from "../ProductCard"

const FeaturedProductsSection = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://agro-food-tech-be.onrender.com/api/products")
        if (!res.ok) throw new Error("Failed to fetch products")
        const data = await res.json()

        // Take the first 3 products (or customize the logic as needed)
        const topThree = data.slice(0, 3)
        setFeaturedProducts(topThree)
      } catch (err) {
        console.error("Error fetching featured products:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
  <section className="bg-[#d8f0d1] py-20 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-[#14532d] mb-4">
         Featured Premium Products
      </h2>
      <p className="text-lg text-[#1c4532] max-w-2xl mx-auto mb-12">
        Discover our most popular frozen corn and vegetable products, loved by customers nationwide.
      </p>

      {loading ? (
        <p className="text-lg text-gray-700">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      <div className="mt-10">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all text-lg font-medium"
        >
          <Star size={20} />
          View All Products
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </section>
)

}

export default FeaturedProductsSection
