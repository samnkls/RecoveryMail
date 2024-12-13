"use client";

import { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { RecoveryStep } from "./RecoveryStep";
import { generateToken, generateTempPassword } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import * as gtag from "@/lib/gtag";

export function RecoverySteps() {
  const [progress, setProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
    complete: false
  });
  const [token] = useState(generateToken(7));
  const [tempPassword] = useState(generateTempPassword());

  useEffect(() => {
    // Random delays between 4-12 seconds for each step
    const delay1 = Math.random() * (5000 - 3000) + 3000; // 3-5 seconds
    const delay2 = delay1 + (Math.random() * (4000 - 3000) + 3000); // +3-4 seconds
    const delay3 = delay2 + (Math.random() * (3000 - 2000) + 2000); // +2-3 seconds
    const delayComplete = delay3 + 1000; // Show complete button 1 second after last step

    // Show first step
    const timer1 = setTimeout(() => {
      setVisibleSteps(prev => ({ ...prev, step1: true }));
      setProgress(33);
    }, delay1);

    // Show second step
    const timer2 = setTimeout(() => {
      setVisibleSteps(prev => ({ ...prev, step2: true }));
      setProgress(66);
    }, delay2);

    // Show third step
    const timer3 = setTimeout(() => {
      setVisibleSteps(prev => ({ ...prev, step3: true }));
      setProgress(100);
    }, delay3);

    // Show complete button
    const timerComplete = setTimeout(() => {
      setVisibleSteps(prev => ({ ...prev, complete: true }));
    }, delayComplete);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerComplete);
    };
  }, []);

  const handleComplete = () => {
    // Track completion click event
    gtag.event({
      action: 'complete_recovery',
      category: 'conversion',
      label: 'Recovery Completion',
      value: 1
    });
    
    window.location.href = "https://pay.kirvano.com/236beb59-65ec-4de9-9634-2f96a0cf05e2";
  };

  return (
    <div className="space-y-6">
      <ProgressBar progress={progress} />
      <div className="space-y-4">
        <RecoveryStep 
          number={1}
          text="Verificação de segurança em andamento..."
          visible={visibleSteps.step1}
        />
        <RecoveryStep 
          number={2}
          text="Gerando token de recuperação..."
          visible={visibleSteps.step2}
          token={token}
          tempPassword={tempPassword}
        />
        <RecoveryStep 
          number={3}
          text="Preparando instruções de recuperação..."
          visible={visibleSteps.step3}
        />

        {/* Completion Button */}
        {visibleSteps.complete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Button
              onClick={handleComplete}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-semibold
                       rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300
                       hover:shadow-green-500/20 hover:shadow-xl relative overflow-hidden group"
              size="lg"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Concluir Recuperação
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}