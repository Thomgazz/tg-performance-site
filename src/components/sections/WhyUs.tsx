import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  {
    title: "Une expertise issue du sport de haut niveau",
    description:
      "Une expérience acquise auprès de sportifs évoluant dans des environnements exigeants.",
  },
  {
    title: "Un accompagnement personnalisé",
    description:
      "Chaque programme est construit selon le profil et la situation de la personne.",
  },
  {
    title: "Une approche basée sur l'analyse",
    description:
      "Les choix d'entraînement reposent sur les connaissances scientifiques, l'observation et l'adaptation.",
  },
  {
    title: "Une vision durable",
    description:
      "Construire des capacités physiques qui améliorent durablement la performance et la santé.",
  },
];

export function WhyUs() {
  return (
    <section className="border-t border-line bg-surface py-12 md:py-16">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Pourquoi TG Performance
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2">
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
