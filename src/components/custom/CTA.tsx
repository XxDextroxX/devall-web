"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/30 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-6">
          ¿Buscas una colaboración? ¡Comienza Hoy!
        </h2>
        <Button
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 text-xl font-semibold transform hover:scale-105 transition-all duration-300"
          asChild
        >
          <Link href="#contacto">Contáctanos</Link>
        </Button>
      </div>
    </section>
  );
}
