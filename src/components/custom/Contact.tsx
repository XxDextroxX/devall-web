"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-4">
            ¿Necesitas Ayuda? ¡Contáctanos!
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="font-semibold text-gray-50">
                  Correo Electrónico
                </h3>
                <p className="text-gray-300">info@devallsas.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="font-semibold text-gray-50">Teléfono</h3>
                <p className="text-gray-300">+593 96 335 2953</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="font-semibold text-gray-50">Ubicación</h3>
                <p className="text-gray-300">
                  Manabí - Portoviejo.
                </p>
              </div>
            </div>
          </div>
          <Card className="bg-gray-800 border-gray-700 shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Tu Nombre"
                    className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu Correo Electrónico"
                    className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tu Mensaje"
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
