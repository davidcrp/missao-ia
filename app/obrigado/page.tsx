import type { Metadata } from "next";
import { Chip, Container, Pill, Section } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Compra confirmada — Missão IA",
  robots: { index: false, follow: false },
};

export default function Obrigado() {
  return (
    <Section center className="pt-16 pb-16">
      <Container prose>
        <Chip className="mx-auto mb-5">✅</Chip>
        <h1 className="t-h2">Pronto, professor. Sua compra foi confirmada.</h1>

        <p className="mx-auto mt-4 max-w-[560px] text-sm leading-relaxed text-body md:text-base">
          O link de download já está a caminho do e-mail que você usou na compra.
          Se não aparecer em alguns minutos, confira a caixa de spam ou a aba de
          promoções antes de falar com o suporte.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          <Pill tone="green">Acesso vitalício</Pill>
          <Pill tone="green">Garantia de 7 dias</Pill>
          <Pill tone="green">Sem mensalidade</Pill>
        </div>

        <p className="mt-8 text-xs text-muted">
          Guarde este e-mail: é por ele que você acessa o material sempre que precisar.
        </p>
      </Container>
    </Section>
  );
}
