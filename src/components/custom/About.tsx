"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <section id="acerca-de" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-4">
            Conoce Más Sobre Devall
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Somos un equipo de desarrolladores y diseñadores apasionados
              dedicados a crear soluciones digitales excepcionales. Nuestra
              plantilla Next.js combina tecnologías de vanguardia como Machine
              Learning, Deep Learning y Flutter con diseños innovadores para
              ayudar a las empresas a triunfar en el desarrollo de software.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-50">
                Bases de Datos, Autenticación, Stripe, Sanity y Más
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="integrations" className="border-gray-700">
                  <AccordionTrigger className="text-gray-300 hover:text-gray-50">
                    Integraciones Pre-construidas
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    <ul className="space-y-2">
                      <li>
                        • Integración con bases de datos usando Firebase y
                        PostgreSQL
                      </li>
                      <li>• Autenticación con NextAuth.js</li>
                      <li>• Procesamiento de pagos con Stripe</li>
                      <li>• Gestión de contenido con Sanity CMS</li>
                      <li>• Servicios de correo y análisis</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="features" className="border-gray-700">
                  <AccordionTrigger className="text-gray-300 hover:text-gray-50">
                    Funcionalidades Avanzadas
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    <ul className="space-y-2">
                      <li>
                        • Renderizado del lado del servidor y generación
                        estática
                      </li>
                      <li>• Rutas API y middleware</li>
                      <li>• Optimización SEO y etiquetas meta</li>
                      <li>• Monitoreo de rendimiento y análisis</li>
                      <li>• Diseño responsivo y accesibilidad</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Colaboración del equipo"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Espacio de trabajo de la oficina"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
