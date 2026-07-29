import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-10">
        <div>
          <p className="text-sm font-medium tracking-wide text-accent">
            Préparation physique &amp; coaching personnalisé
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">
            Une préparation physique personnalisée, construite sur le
            terrain, la science et vos objectifs.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-anthracite-soft">
            Que vous cherchiez la performance ou souhaitiez simplement
            reprendre une activité physique, l&apos;accompagnement s&apos;adapte à
            votre profil, votre rythme et vos contraintes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#contact">Demander un bilan</Button>
            <Button href="#contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line md:aspect-[3/4]">
          <Image
            src="/images/hero-test-physique.jpg"
            alt="Séance de test physique sur le terrain"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
