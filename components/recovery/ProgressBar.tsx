"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-black/30 rounded-full h-2 mb-8">
      <div 
        className="bg-green-500 h-2 rounded-full transition-all duration-700 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}