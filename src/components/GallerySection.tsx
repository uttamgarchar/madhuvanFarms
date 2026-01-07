import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, alt: "Farmers harvesting mangoes at sunset", rotate: -3 },
  { src: gallery2, alt: "Careful packaging of fresh mangoes", rotate: 2 },
  { src: gallery3, alt: "Mango tree laden with ripe fruits", rotate: -2 },
  { src: gallery4, alt: "Fresh mango delivery unboxing", rotate: 3 },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background overflow-hidden">
      <div className="container-custom mx-auto">
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
            From Our Farm
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Mango Farm{" "}
            <span className="text-gradient-leaf">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into our orchards, harvesting process, and the care 
            we put into every mango that reaches you.
          </p>
        </motion.div>

        {/* Polaroid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30, rotate: image.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: image.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.05, 
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Polaroid Frame */}
              <div className="bg-card p-3 pb-12 rounded-sm shadow-card border border-border/30">
                <div className="aspect-square overflow-hidden rounded-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Caption */}
                <p className="absolute bottom-3 left-3 right-3 text-center text-xs text-muted-foreground font-body">
                  {image.alt}
                </p>
              </div>

              {/* Tape decoration */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-primary/60 rotate-[-5deg] opacity-70" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-2xl md:text-3xl font-heading text-foreground italic mb-4">
            "Every mango carries the warmth of our sunshine and the love of three generations."
          </p>
          <cite className="text-muted-foreground not-italic">
            — The Madhuvan Family
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default GallerySection;
