"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-50 mb-4">Devall</h3>
            <p className="text-gray-300">
              La plantilla definitiva de Next.js para negocios modernos de
              desarrollo de software.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-50 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Acerca de", "Características", "Precios"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-50 mb-4">Recursos</h4>
            <ul className="space-y-2">
              {["Blog", "Documentación", "Soporte", "Contacto"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-50 mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-blue-400"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-blue-400"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Devall. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
