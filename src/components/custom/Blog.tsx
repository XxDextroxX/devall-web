"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Blog() {
  const blogPosts = [
    {
      title: "Construyendo Aplicaciones SaaS Escalable con Next.js",
      excerpt:
        "Aprende las mejores prácticas para crear aplicaciones SaaS escalables usando Next.js y patrones de desarrollo modernos.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "El Futuro del Desarrollo Web en 2025",
      excerpt:
        "Explora las últimas tendencias y tecnologías que están dando forma al futuro del desarrollo web y cómo mantenerse a la vanguardia.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Optimizando el Rendimiento en Aplicaciones React",
      excerpt:
        "Descubre técnicas avanzadas para optimizar el rendimiento de aplicaciones React y mejorar la experiencia del usuario.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-4">
            Últimas Noticias y Artículos de Nuestro Blog
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-50 line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                <Link
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Leer Más →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
