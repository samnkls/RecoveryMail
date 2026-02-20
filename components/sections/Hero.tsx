"use client";

import { Card } from "@/components/ui/card";
import { Clock, Shield, Star } from "lucide-react";
import { EmailForm } from "./EmailForm";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-16808569026/63rbCMvkjfcZEMLR-c4-",
        event_label: "Homepage View",
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-black">
      {/* Main Content */}
      <div className="relative z-10 px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-12 flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                alt="Gmail Logo"
                width={200}
                height={80}
                className="h-20 w-auto"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
              Recupere o seu e-mail em até 10 minutos!
            </h1>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold">Recupere Rápido</h3>
                <p className="text-sm text-gray-600">
                  Geramos um token exclusivo, autenticado diretamente pelo
                  Google, para iniciar sua recuperação em apenas 10 minutos, com
                  total segurança e agilidade.
                </p>
              </Card>
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <Shield className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold">Totalmente Seguro</h3>
                <p className="text-sm text-gray-600">
                  Seus dados estão protegidos em um processo 100% confiável.
                </p>
              </Card>
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <Star className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold">Suporte Exclusivo</h3>
                <p className="text-sm text-gray-600">
                  Equipe dedicada para acompanhar sua recuperação de ponta a
                  ponta.
                </p>
              </Card>
            </div>

            {/* Email Form */}
            <EmailForm />
          </div>
        </div>
      </div>
    </section>
  );
}
