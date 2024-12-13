"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="about">
            <AccordionTrigger>RecoveryMail</AccordionTrigger>
            <AccordionContent>
              Perdeu o acesso ao seu Gmail por causa de uma senha esquecida ou outro problema? A RecoveryMail está aqui para te ajudar! Com nossa plataforma de Recuperação Rápida, você recupera o acesso à sua conta Gmail em menos de 5 minutos, seguindo apenas 3 passos simples. É rápido, fácil e seguro!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="step1">
            <AccordionTrigger>Passo 1:</AccordionTrigger>
            <AccordionContent>
              Informe Seu Endereço de Email: Basta nos fornecer o endereço de email que deseja recuperar no campo acima, e nós faremos o resto.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="step2">
            <AccordionTrigger>Passo 2:</AccordionTrigger>
            <AccordionContent>
              Redefinição de Senha e Token de Segurança: Durante o processo, sua senha será redefinida e enviaremos um token exclusivo, junto com uma senha temporária, para garantir acesso seguro e rápido à sua conta.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="step3">
            <AccordionTrigger>Passo 3:</AccordionTrigger>
            <AccordionContent>
              Tempo de Conclusão e Suporte Total: Em até alguns minutos, nossa equipe, trabalhando em conjunto com o Google, finaliza todo o processo de recuperação. Oferecemos suporte dedicado para garantir que você tenha acesso completo à sua conta sem complicações.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}