import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-10">
        <div>
          <p className="text-sm font-medium tracking-wide text-accent">
            Préparation physique &amp; coaching personnalisé
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">
            Développez votre potentiel physique grâce à une méthode issue du
            sport de haut niveau.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-anthracite-soft">
            Une approche issue de la préparation physique de haut niveau,
            adaptée aux sportifs comme aux personnes souhaitant retrouver un
            corps plus fort, durable et performant.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#contact">Demander un bilan</Button>
            <Button href="#contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </div>

        <PhotoPlaceholder
          label="Photo — séance terrain / test physique"
          className="aspect-[4/5] w-full md:aspect-[3/4]"
        />
      </Container>
    </section>
  );
}
