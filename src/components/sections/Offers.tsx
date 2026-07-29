import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const offers = [
  {
    tag: "Le point de départ",
    title: "Bilan Performance & Santé",
    description: "Un état des lieux complet avant toute chose.",
    items: [
      "Échange initial",
      "Questionnaire",
      "Tests physiques",
      "Analyse",
      "Plan d'action personnalisé",
    ],
    highlight: false,
  },
  {
    tag: "À domicile",
    title: "Coaching individuel à domicile",
    description: "Un accompagnement en direct, chez vous.",
    items: [
      "Déplacement dans un rayon de 45 km",
      "Séance individuelle",
      "Matériel fourni",
      "Corrections techniques",
      "Crédit d'impôt de 50 %",
    ],
    highlight: false,
  },
  {
    tag: "Offre principale",
    title: "Coaching hybride",
    description: "Un suivi personnalisé, entre les séances.",
    items: [
      "Bilan initial",
      "Programme personnalisé",
      "Suivi hebdomadaire",
      "Ajustements réguliers",
      "Échanges à distance",
    ],
    highlight: true,
  },
];

export function Offers() {
  return (
    <section id="offres" className="py-12 md:py-16">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-sm font-medium tracking-wide text-accent">
            Les accompagnements
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Trois formats, une même exigence
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 100} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl p-7 ${
                  offer.highlight
                    ? "bg-ink text-white"
                    : "border border-line bg-background text-ink"
                }`}
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ${
                    offer.highlight
                      ? "bg-accent text-accent-ink"
                      : "bg-surface text-anthracite-soft"
                  }`}
                >
                  {offer.tag}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{offer.title}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    offer.highlight ? "text-white/70" : "text-anthracite-soft"
                  }`}
                >
                  {offer.description}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {offer.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-sm ${
                        offer.highlight ? "text-white/90" : "text-ink"
                      }`}
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={offer.highlight ? "primary" : "secondary"}
                  className={`mt-8 w-full ${
                    offer.highlight
                      ? ""
                      : "!border-line !text-ink hover:!border-ink"
                  }`}
                >
                  En savoir plus
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
