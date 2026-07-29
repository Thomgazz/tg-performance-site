import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Évaluer",
    description:
      "Analyse du profil, des objectifs, de l'historique sportif et des contraintes.",
  },
  {
    number: "02",
    title: "Construire",
    description: "Création d'une stratégie personnalisée et structurée.",
  },
  {
    number: "03",
    title: "Accompagner",
    description: "Suivi régulier, présence et adaptation continue.",
  },
  {
    number: "04",
    title: "Progresser",
    description: "Mesure des résultats et évolution dans la durée.",
  },
];

export function Method() {
  return (
    <section id="methode" className="border-t border-line bg-surface py-16 md:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-sm font-medium tracking-wide text-accent">
            Ma méthode
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Une approche en quatre étapes
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-background p-6">
                <span className="text-xs font-semibold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-anthracite-soft">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <p className="mt-12 max-w-2xl text-xl font-medium leading-snug tracking-tight text-ink">
            Vous ne recevez pas simplement un programme. Vous bénéficiez
            d&apos;une analyse et d&apos;une stratégie.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
