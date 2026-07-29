import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const experience = [
  {
    sport: "Basket-ball",
    items: [
      "Préparateur physique en Ligue 2 Féminine — demi-finaliste des Playoffs",
      "Préparateur physique d'un groupe U18 France Féminine",
    ],
  },
  {
    sport: "Rugby",
    items: [
      "Préparateur physique au Pôle Espoir de Rennes — Stade Rennais Rugby U18 Elite, vice-championnes de France",
      "Préparateur physique du Stade Rennais Rugby — équipe Séniores Féminines Elite 1",
    ],
  },
];

export function About() {
  return (
    <section id="a-propos" className="py-16 md:py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/about-accompagnement.jpg"
              alt="Accompagnement d'une joueuse en match"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <span className="text-sm font-medium tracking-wide text-accent">
            Qui suis-je
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Une expertise construite entre terrain et science
          </h2>
          <p className="mt-5 text-base leading-relaxed text-anthracite-soft">
            Je suis préparateur physique. Mon expertise s&apos;est construite
            au contact direct des sportifs — en analysant leurs besoins et en
            adaptant chaque solution à leur réalité.
          </p>

          <div className="mt-6 space-y-5">
            {experience.map((group) => (
              <div key={group.sport}>
                <p className="text-xs font-semibold tracking-wide text-ink">
                  {group.sport}
                </p>
                <ul className="mt-2 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-anthracite-soft">
            Football — plusieurs années comme éducateur auprès de jeunes
            joueurs.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
