import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20">
      <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-10">
        <div>
          <p className="text-sm font-medium tracking-wide text-accent">
            Préparation physique &amp; coaching personnalisé
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">
            Développez vos capacités physiques avec un accompagnement adapté
            à vos objectifs.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-anthracite-soft">
            Sportifs en quête de performance ou particuliers en reprise
            d&apos;activité : une approche construite sur l&apos;analyse et
            l&apos;expérience du terrain.
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
