import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateToken(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generateTempPassword(): string {
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const asterisks = '********'; // 8 asterisks
  
  let password = '';
  
  // First character (uppercase)
  password += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
  
  // Second character (lowercase)
  password += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
  
  // Add asterisks in the middle
  password += asterisks;
  
  // Second to last character (uppercase)
  password += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
  
  // Last character (lowercase)
  password += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
  
  return password;
}