"use client";

import { motion } from "framer-motion";

interface RecoveryStepProps {
  number: number;
  text: string;
  visible: boolean;
  token?: string;
  tempPassword?: string;
}

export function RecoveryStep({ number, text, visible, token, tempPassword }: RecoveryStepProps) {
  return (
    <motion.div 
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-4">
        <motion.div 
          className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: visible ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className="text-green-500">{number}</span>
        </motion.div>
        <motion.p 
          className="text-gray-300"
          initial={{ x: -20 }}
          animate={{ x: visible ? 0 : -20 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {text}
        </motion.p>
      </div>

      {token && visible && (
        <motion.div
          className="ml-12 p-4 bg-black/30 rounded-lg border border-green-500/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <p className="text-sm text-gray-400 mb-2">Token de Recuperação:</p>
          <p className="text-green-500 font-mono text-lg">{token}</p>
          {tempPassword && (
            <>
              <p className="text-sm text-gray-400 mt-4 mb-2">Senha Provisória:</p>
              <p className="text-green-500 font-mono text-lg">{tempPassword}</p>
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}