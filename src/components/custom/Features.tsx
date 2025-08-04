"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Rocket,
  Palette,
  Layout,
  Plug,
  Sliders,
  RefreshCw,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Rocket,
      title: "Diseñado para Desarrollo de Software",
      description:
        "Creado específicamente para aplicaciones modernas con arquitecturas escalables utilizando Docker, NestJS y Rust.",
    },
    {
      icon: Palette,
      title: "Diseño de Alta Calidad",
      description:
        "Sistema de diseño cuidadosamente elaborado con enfoque en la experiencia del usuario y estética moderna.",
    },
    {
      icon: Layout,
      title: "Componentes y Páginas UI",
      description:
        "Colección completa de componentes reutilizables y plantillas de páginas pre-construidas con React y Vue.",
    },
    {
      icon: Plug,
      title: "Integraciones Clave",
      description:
        "Integraciones pre-configuradas con Firebase, KrakenD, SQL y APIs para desarrollo rápido.",
    },
    {
      icon: Sliders,
      title: "Totalmente Personalizable",
      description:
        "Componentes y layouts fácilmente adaptables para cumplir con los requisitos de tu marca.",
    },
    {
      icon: RefreshCw,
      title: "Actualizaciones Constantes",
      description:
        "Actualizaciones continuas con nuevas funcionalidades, parches de seguridad y mejoras de rendimiento.",
    },
  ];

  return (
    <section id="características" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-4">
            Integraciones Esenciales con Diseño Moderno
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="bg-gray-800 border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-50">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
