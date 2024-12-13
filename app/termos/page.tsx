"use client";

import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
        >
          ← Voltar para página inicial
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Última atualização: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">
              Ao acessar e usar nossos serviços, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
            <p className="mb-4">
              Fornecemos serviços de consultoria empresarial, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Análise e diagnóstico empresarial</li>
              <li>Desenvolvimento de estratégias</li>
              <li>Implementação de soluções</li>
              <li>Suporte contínuo</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Responsabilidades do Usuário</h2>
            <p className="mb-4">
              Ao utilizar nossos serviços, você concorda em:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornecer informações precisas e completas</li>
              <li>Manter a confidencialidade de suas credenciais</li>
              <li>Não usar os serviços para fins ilegais</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitação de Responsabilidade</h2>
            <p className="mb-4">
              Nossa empresa não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados ou uso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Modificações dos Termos</h2>
            <p className="mb-4">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação em nosso site.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}