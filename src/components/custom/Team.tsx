"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Olivia Andrium",
      role: "Gerente de Proyectos",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Marcus Chen",
      role: "Desarrollador Principal",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Sarah Johnson",
      role: "Diseñadora UI/UX",
      avatar: "/placeholder.svg?height=120&width=120",
    },
  ];

  return (
    <section id="equipo" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-4">
            Conoce a Nuestro Equipo Creativo y Dedicado
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="bg-gray-800 border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <motion.div
                    className="mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto"
                    />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-50">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-300">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4">
                    {[Twitter, Linkedin, Github].map((Icon, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        whileHover={{
                          scale: 1.2,
                          rotate: 5,
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <Icon className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
