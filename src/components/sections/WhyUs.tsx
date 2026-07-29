import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  {
    title: "Expérience du haut niveau",
    description:
      "Une méthode construite dans des environnements sportifs exigeants.",
  },
  {
    title: "Approche individualisée",
    description:
      "Chaque programme est adapté au profil, aux objectifs et aux contraintes — que vous soyez sportif de compétition ou simplement décidé à progresser.",
  },
  {
    title: "Méthode scientifique",
    description:
      "Des décisions basées sur l'analyse, les données et la progression.",
  },
  {
    title: "Vision long terme",
    description: "Construire un corps performant et durable.",
  },
];

export function WhyUs() {
  return (
    <section className="border-t border-line bg-surface py-16 md:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-sm font-medium tracking-wide text-accent">
            Pourquoi TG Performance
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Une différence qui se sent dès la première séance
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 80} className="flex gap-4">
              <span className="mt-1 text-sm font-semibold text-accent">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-anthracite-soft">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
