"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as gtag from "@/lib/gtag";

export function EmailForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Track email submission event
    gtag.event({
      action: 'start_recovery',
      category: 'conversion',
      label: 'Email Form Submission'
    });
    
    // Store email in session storage
    sessionStorage.setItem("recoveryEmail", email);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      router.push("/recovery");
    }, 500);
  };

  return (
    <div className="mt-16 max-w-md mx-auto">
      <div className="relative overflow-hidden">
        {/* Semi-transparent dark background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-zinc-900/60 animate-gradient-x" />
        
        {/* Glass morphism container */}
        <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10">
          {/* Magical floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-2 w-2 bg-green-500/30 rounded-full top-1/4 left-1/4 animate-float-slow" />
            <div className="absolute h-3 w-3 bg-green-500/20 rounded-full top-3/4 right-1/4 animate-float-medium" />
            <div className="absolute h-2 w-2 bg-green-500/25 rounded-full bottom-1/4 right-1/3 animate-float-fast" />
          </div>

          {/* Form content */}
          <div className="relative z-10">
            <Label 
              htmlFor="email" 
              className="text-xl font-semibold mb-6 text-white block text-center"
            >
              Digite seu email para recuperar:
            </Label>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu email"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-white/20 bg-black/30 
                           text-lg transition-all duration-300 placeholder:text-gray-400 text-white
                           focus:border-green-500 focus:ring-2 focus:ring-green-500/50
                           group-hover:border-green-400/50 backdrop-blur-sm"
                />
                {/* Magical focus effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 to-green-500/10 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-semibold
                         rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300
                         hover:shadow-green-500/20 hover:shadow-xl relative overflow-hidden group
                         disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Processando..." : "Recuperar Agora"}
                </span>
                {/* Magical hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}