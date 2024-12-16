"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";
import Image from "next/image";
import { RecoverySteps } from "@/components/recovery/RecoverySteps";
import * as gtag from "@/lib/gtag";

export default function RecoveryPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("recoveryEmail");
    if (!storedEmail) {
      router.push("/");
    } else {
      setEmail(storedEmail);
      setLoading(false);

      // Track recovery page view (Google Ads Pixel)
      gtag.event({
        action: "view_recovery_page",
        category: "engagement",
        label: "Recovery Process Started",
      });
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative py-12 px-6">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Image
            src="https://reoverymail.site/wp-content/uploads/2024/11/Please-1.png"
            alt="Logo"
            width={200}
            height={80}
            className="h-20 w-auto"
          />
        </div>

        {/* Recovery Status Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-green-500 animate-pulse" />
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-6">
              Processo de Recuperação Iniciado
            </h1>

            <div className="space-y-6">
              <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 text-center">
                  Iniciamos o processo de recuperação para:
                </p>
                <p className="text-green-500 font-semibold text-lg text-center mt-2">
                  {email}
                </p>
              </div>

              <RecoverySteps />

              <div className="mt-8 text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
