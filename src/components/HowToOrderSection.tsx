import { motion } from "framer-motion";
import { Eye, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Eye,
    step: "01",
    title: "Browse Varieties",
    description: "Explore our premium mango collection and find your favorites.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Click WhatsApp",
    description: "Tap the order button to start a chat with us instantly.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Confirm & Receive",
    description: "Share your details and receive fresh mangoes at your doorstep!",
  },
];

const HowToOrderSection = () => {
  return (
    <section className="section-padding bg-gradient-warm watercolor-texture relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-secondary">
          <ellipse cx="50" cy="60" rx="35" ry="40" />
          <path d="M50 20 Q65 0 75 5 Q60 12 50 20" />
        </svg>
      </motion.div>

      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Simple Process
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            How to{" "}
            <span className="text-gradient-mango">Order</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No complicated checkout. No signup needed. 
            Just three simple steps to get fresh mangoes delivered.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Step Number Badge */}
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-mango text-primary-foreground font-bold text-sm flex items-center justify-center shadow-mango z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.step}
                </motion.div>

                {/* Card */}
                <div className="bg-card rounded-3xl p-8 pt-12 shadow-card border border-border/50">
                  {/* Icon */}
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <step.icon className="w-10 h-10 text-secondary" />
                  </motion.div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://wa.me/919725131748?text=Hi%2C%20I%20want%20to%20order%20fresh%20mangoes!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Your Order Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
