import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const categories = [
  "Résultats sportifs",
  "Transformations santé",
  "Expériences clubs",
];

export function SocialProof() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-sm font-medium tracking-wide text-accent">
            Preuve sociale
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Témoignages &amp; résultats
          </h2>
          <p className="mt-4 text-base leading-relaxed text-anthracite-soft">
            Cet espace accueillera bientôt les retours des sportifs, des
            personnes accompagnées et des clubs partenaires.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category} delay={i * 80}>
              <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line text-center">
                <span className="text-sm font-medium text-ink">
                  {category}
                </span>
                <span className="text-xs text-anthracite-soft">
                  Bientôt disponible
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
