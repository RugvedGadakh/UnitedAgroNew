import { AnimatedTestimonials } from "../ui/animated-testimonials"
import { motion } from "framer-motion"
import { MapPin, Factory, Award } from "lucide-react"

export function Timeline() {
  const testimonials = [
    {
      year: "2013",
      title: "Humble Beginnings",
      subtitle: "Foundation of United Agro as a trading company",
      description:
        "United Agro Frozen Food Products Pvt. Ltd. began its journey in 2013 as a food trading company. With a focus on sourcing and supplying high-quality frozen vegetables, our mission was simple yet powerful — to deliver consistent freshness and quality to Indian households and businesses.",
      icon: <MapPin size={24} />,
      src: "/Images/About3.jpg"
    },
    {
      year: "2013–2017",
      title: "Building Strong Foundations",
      subtitle: "Establishing sourcing and distribution networks",
      description:
        "During these formative years, we developed a robust supplier base and reliable distribution channels. By fostering trust with farmers and consistently meeting customer expectations, we built the foundation for a scalable and sustainable food business.",
      icon: <Factory size={24} />,
      src: "/Images/About2.jpg"
    },
    {
      year: "2017",
      title: "A Transformational Milestone",
      subtitle: "Launch of our manufacturing facility in Komathan",
      description:
        "2017 marked a turning point as we inaugurated our first state-of-the-art frozen food processing facility in Komathan, near Shirdi, Maharashtra. This transition from a trading company to a fully integrated food production unit gave us complete control over quality, hygiene, packaging, and logistics.",
      icon: <Award size={24} />,
      src: "/Images/About1.jpg"
    }
  ]

  return (
    <section>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-[#14532d] mb-4">
          Our Journey Through Time
        </h2>
        <p className="text-lg text-[#1c4532] max-w-2xl mx-auto">
          Milestones that shaped our path to excellence
        </p>
      </motion.div>

      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  )
}
