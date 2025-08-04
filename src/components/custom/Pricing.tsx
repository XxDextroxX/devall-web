"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Inicial",
      price: "$100",
      period: "/mes",
      features: [
        "5 Proyectos",
        "Soporte Básico",
        "Componentes Principales",
        "Acceso a Documentación",
      ],
    },
    {
      name: "Profesional",
      price: "$200",
      period: "/mes",
      features: [
        "Proyectos Ilimitados",
        "Soporte Prioritario",
        "Todos los Componentes",
        "Integraciones Avanzadas",
        "Personalización de Marca",
      ],
      popular: true,
    },
    {
      name: "Empresarial",
      price: "$300",
      period: "/mes",
      features: [
        "Todo en Profesional",
        "Solución de Marca Blanca",
        "Desarrollo Personalizado",
        "Soporte Dedicado",
        "Garantía SLA",
      ],
    },
  ];

  return (
    <section id="precios" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-4">
            Precios Asequibles con Planes Simples
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <Card
                className={`bg-gray-800 border-gray-700 shadow-lg relative h-full ${
                  plan.popular ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </motion.div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-50">
                    {plan.name}
                  </CardTitle>
                  <motion.div
                    className="mt-4"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <span className="text-4xl font-bold text-gray-50">
                      {plan.price}
                    </span>
                    <span className="text-gray-300">{plan.period}</span>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3">
                      Elegir Plan
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4">
            ¿Buscas una solución empresarial?{" "}
            <Link
              href="#contacto"
              className="text-blue-400 hover:text-blue-300 ml-1"
            >
              Contacta a nuestro equipo para una cotización.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
