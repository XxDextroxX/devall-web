"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Esta plantilla de Next.js ha transformado nuestro proceso de desarrollo. La calidad y atención al detalle son excepcionales.",
      author: "Musharof Chy",
      role: "Fundador @ Pimjo",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Plantilla sobresaliente con excelente documentación. Nos ahorró meses de tiempo de desarrollo.",
      author: "Jennifer Smith",
      role: "CTO @ TechFlow",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "La mejor plantilla de Next.js que hemos usado. Código limpio, diseño moderno y gran rendimiento.",
      author: "David Rodriguez",
      role: "Desarrollador Principal @ StartupX",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonios" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-gray-700 shadow-lg">
              <CardContent className="p-8 text-center">
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.blockquote
                  className="text-lg lg:text-xl italic text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </motion.blockquote>
                <motion.div
                  className="flex items-center justify-center space-x-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={
                      testimonials[currentTestimonial].avatar ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-bold text-xl text-gray-50">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-300">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          <div className="flex justify-center mt-8 space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
