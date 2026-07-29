import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ApproachBridge() {
  return (
    <section className="border-t border-line bg-surface py-10 md:py-12">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
            La préparation physique, ce n&apos;est pas seulement pour les
            sportifs.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-anthracite-soft">
            Développer ses capacités physiques, c&apos;est améliorer sa
            performance, sa santé ou simplement sa condition physique au
            quotidien.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
