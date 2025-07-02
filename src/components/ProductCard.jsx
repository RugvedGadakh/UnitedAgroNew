"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  // Construct the image URL using image ID
  const imageUrl = product.image
    ? `https://agro-food-tech-be.onrender.com/api/image/view/${product.image}`
    : "/placeholder.svg"

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="product-image">
        <img src={imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <Link to={`/products/${product._id}`} className="btn">
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard
