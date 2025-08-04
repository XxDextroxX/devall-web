"use client";

import Image from "next/image";

export default function TrustedBrands() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-4">
            Confiado por Marcas Globales
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {["Google", "Apple", "Microsoft", "Amazon", "Meta", "Netflix"].map(
            (brand) => (
              <div key={brand} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=80&width=140&query=${brand} logo`}
                  alt={`Logo de ${brand}`}
                  width={140}
                  height={80}
                  className="grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
