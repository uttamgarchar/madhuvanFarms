import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-warm watercolor-texture relative overflow-hidden">
      {/* Decorative leaf */}
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-secondary">
          <path d="M100 20 Q150 50 140 120 Q100 180 60 120 Q50 50 100 20" />
        </svg>
      </motion.div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Logo Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-mango rounded-3xl opacity-20 blur-3xl" />
              
              {/* Main image container */}
              <div className="relative bg-card rounded-3xl p-12 shadow-card border border-border/50 flex items-center justify-center">
                <motion.img
                  src={logo}
                  alt="Madhuvan Mango Farm"
                  className="w-64 md:w-80 drop-shadow-xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -2, 2, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-3 rounded-full shadow-green font-semibold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Est. 1998
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Story
            </motion.span>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About{" "}
              <span className="text-gradient-mango">Madhuvan Farm</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Nestled in the heart of Gujarat, <strong className="text-foreground">Madhuvan Mango Farm</strong> has been a 
                family-owned treasure for over 25 years. What started as a small 
                orchard by our grandfather has now grown into 50+ acres of 
                premium mango orchards.
              </p>
              
              <p>
                We believe in the old ways — <em>no chemicals, no artificial 
                ripening, just nature and patience</em>. Each mango is hand-picked 
                at the perfect moment and delivered with care to your doorstep.
              </p>

              <p>
                Our mission is simple: to bring the authentic taste of 
                farm-fresh mangoes to families across India, creating 
                memories with every bite.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-wrap gap-4">
              {["Family Values", "Traditional Methods", "Quality First", "Customer Trust"].map((value, index) => (
                <motion.span
                  key={value}
                  className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {value}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Madhuvan%20Farm."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
