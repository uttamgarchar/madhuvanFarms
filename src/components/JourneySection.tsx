import { motion } from "framer-motion";
import { Leaf, Sun, Droplets, CheckCircle, Package, Truck } from "lucide-react";

const journeySteps = [
  {
    id: 1,
    icon: Sun,
    title: "Freshly Picked from the Orchard",
    description: "Our mangoes are carefully hand-picked at the perfect ripeness directly from our farms, ensuring natural sweetness, rich aroma, and zero damage.",
    visual: "🌳",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    icon: Leaf,
    title: "No Chemicals, Only Nature",
    description: "We follow traditional, natural ripening methods without using harmful chemicals, preserving the authentic taste and nutrition of real mangoes.",
    visual: "🥭",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    id: 3,
    icon: Droplets,
    title: "Cleaned with Food-Safe Care",
    description: "Each mango is washed and cleaned using hygienic, food-safe processes to remove dust and impurities—only freshness reaches you.",
    visual: "💧",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Only the Best Make the Cut",
    description: "Every mango goes through a careful quality check for size, sweetness, and freshness. Imperfect ones are filtered out.",
    visual: "✨",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: 5,
    icon: Package,
    title: "Packed Fresh & Safe",
    description: "Mangoes are packed in breathable, eco-friendly packaging that protects freshness during transit and keeps the fruit safe.",
    visual: "📦",
    color: "from-orange-400 to-amber-600",
    bgColor: "bg-orange-50",
  },
  {
    id: 6,
    icon: Truck,
    title: "Farm to Home Delivery",
    description: "From our farm directly to your home—fast, safe, and fresh. Just message us on WhatsApp and enjoy mangoes at their best.",
    visual: "🏠",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-teal-50",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-20 bg-gradient-to-b from-mango-cream via-white to-mango-cream/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-mango-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-mango-green/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-mango-yellow/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-mango-green/10 text-mango-green rounded-full text-sm font-medium mb-4"
          >
            🥭 Our Promise to You
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-mango-brown mb-6">
            From Our Farm to{" "}
            <span className="text-gradient">Your Home</span>
          </h2>
          
          <p className="text-lg md:text-xl text-mango-brown/70 max-w-3xl mx-auto leading-relaxed">
            Every mango tells a story of care, tradition, and love. Here's the journey 
            our mangoes take to reach you at their freshest and most delicious.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mango-yellow via-mango-green to-mango-brown/30 transform -translate-x-1/2 hidden lg:block rounded-full" />

          {/* Journey Steps */}
          <div className="space-y-12 lg:space-y-0">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative lg:flex lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } lg:py-8`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center ring-4 ring-white`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className={`lg:w-[calc(50%-4rem)] ${isEven ? "lg:pr-8 lg:text-right" : "lg:pl-8"}`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`${step.bgColor} rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}
                    >
                      {/* Mobile Icon */}
                      <div className={`lg:hidden w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} shadow-md flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Step Number */}
                      <div className={`inline-flex items-center gap-2 mb-3 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <span className="text-4xl">{step.visual}</span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                          Step {step.id}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl md:text-2xl text-mango-brown mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-mango-brown/70 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>

                      {/* Decorative Leaf */}
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute ${isEven ? "-right-4" : "-left-4"} -bottom-2 text-3xl opacity-50 hidden lg:block`}
                      >
                        🍃
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block lg:w-[calc(50%-4rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-mango-yellow/20">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl"
            >
              🥭
            </motion.div>
            <h3 className="font-display text-2xl text-mango-brown">
              Ready to Taste the Difference?
            </h3>
            <p className="text-mango-brown/70 max-w-md">
              Experience farm-fresh mangoes delivered straight to your doorstep with love and care.
            </p>
            <motion.a
              href="https://wa.me/919725131748?text=Hi!%20I%20want%20to%20order%20fresh%20mangoes"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
