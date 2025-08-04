"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-4">
            Galería, Previsualizaciones y Portafolio
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: item * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={`/placeholder.svg?height=300&width=400&query=portfolio project ${item}`}
                alt={`Proyecto del Portafolio ${item}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="text-center">
                  <motion.h3
                    className="text-xl font-bold text-gray-50 mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    Proyecto {item}
                  </motion.h3>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      Ver Más
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
