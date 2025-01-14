"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
            alt="Logo"
            width={150}
            height={60}
            className="h-16 w-auto mb-4"
          />
          <div className="flex space-x-6 mb-4">
            <Link href="/privacidade" className="text-sm text-gray-600 hover:text-gray-900">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-sm text-gray-600 hover:text-gray-900">
              Termos de Uso
            </Link>
          </div>
          <p className="text-sm text-gray-600 text-center">
          © 2024 RecoveryMail<br />
          CNPJ: 05.032.035/0001-26<br />
          Todos os direitos reservados.
        </p>
        </div>
      </div>
    </footer>
  );
}
