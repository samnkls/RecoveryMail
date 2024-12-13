"use client";

import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
        >
          ← Voltar para página inicial
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Última atualização: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
            <p className="mb-4">
              Coletamos informações que você nos fornece diretamente, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Informações de contato</li>
              <li>Dados necessários para prestação de serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Como Usamos suas Informações</h2>
            <p className="mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornecer e manter nossos serviços</li>
              <li>Notificá-lo sobre mudanças em nossos serviços</li>
              <li>Fornecer suporte ao cliente</li>
              <li>Melhorar nossos serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Proteção de Dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso, alteração, divulgação ou destruição não autorizada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Seus Direitos</h2>
            <p className="mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}