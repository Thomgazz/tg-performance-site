import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const offers = [
  {
    tag: "Offre découverte",
    title: "Bilan Performance & Santé",
    description: "Définir une stratégie adaptée à votre profil.",
    items: [
      "Questionnaire initial",
      "Tests physiques",
      "Analyse du profil",
      "Recommandations personnalisées",
    ],
    highlight: false,
  },
  {
    tag: "Offre principale",
    title: "Coaching hybride",
    description: "Un accompagnement complet, personnalisé et continu.",
    items: [
      "Bilan initial",
      "Programme personnalisé",
      "Application de suivi",
      "Suivi WhatsApp",
      "Ajustements réguliers",
    ],
    highlight: true,
  },
  {
    tag: "Clubs & athlètes",
    title: "Préparation physique sportive",
    description: "Pour les clubs et les athlètes en recherche de performance.",
    items: [
      "Tests physiques",
      "Programmation",
      "Séances terrain",
      "Suivi de la performance",
      "Prévention des blessures",
    ],
    highlight: false,
  },
];

export function Offers() {
  return (
    <section id="offres" className="py-16 md:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-sm font-medium tracking-wide text-accent">
            Les accompagnements
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Un accompagnement pour chaque objectif
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 100} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl p-8 ${
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
                      <span
                        className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                          offer.highlight ? "bg-accent" : "bg-accent"
                        }`}
                      />
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
