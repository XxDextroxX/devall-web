"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-900/20 to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-50 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                Plantilla{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              >
                Next.js{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="inline-block"
              >
                para tu Negocio
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Plantilla Next.js creada para tu próximo{" "}
              <motion.span
                className="text-blue-400 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                Startup, Negocio o Proyecto de Desarrollo
              </motion.span>{" "}
              de Software. Incluye diseño moderno, integraciones avanzadas y
              todo lo necesario para acelerar tus proyectos web con tecnologías
              como Docker, NestJS, Rust, React, Vue, Flutter, Machine Learning y
              más.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  asChild
                >
                  <Link href="#precios">Comenzar</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
                >
                  Saber Más
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/home.jpg?height=600&width=800"
                alt="Imagen Principal para la Plantilla de Devall"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
