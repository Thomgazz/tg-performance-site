import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { calculateAge } from "@/lib/age";

const birthDate = new Date(2000, 4, 9);

type Entry = {
  role: string;
  club: string;
  level?: string;
  result?: string;
};

const experiences: { sport: string; city: string; entries: Entry[] }[] = [
  {
    sport: "Basket-ball",
    city: "Alençon",
    entries: [
      {
        role: "Préparateur physique",
        club: "USBD Alençon 61",
        level: "Ligue 2 Féminine",
        result: "Demi-finaliste des Playoffs",
      },
      { role: "Préparateur physique", club: "U18 France Féminine" },
    ],
  },
  {
    sport: "Rugby",
    city: "Rennes",
    entries: [
      {
        role: "Préparateur physique",
        club: "Pôle Espoir de Rennes / Stade Rennais Rugby",
        level: "Féminines U18 Elite",
        result: "Vice-championnes de France",
      },
      {
        role: "Préparateur physique",
        club: "Stade Rennais Rugby",
        level: "Elite 1 Féminine",
      },
    ],
  },
  {
    sport: "Football",
    city: "Caen",
    entries: [
      {
        role: "Éducateur sportif",
        club: "Maladrerie Omnisport",
        level: "Plusieurs années auprès de jeunes joueurs",
      },
    ],
  },
];

export function About() {
  const age = calculateAge(birthDate);

  return (
    <section id="a-propos" className="py-12 md:py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
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
              Thomas Gazon
            </h2>
            <p className="mt-1 text-sm text-anthracite-soft">
              Préparateur physique, {age} ans
            </p>
            <p className="mt-5 text-base leading-relaxed text-anthracite-soft">
              Passionné par la performance depuis toujours, je me suis
              orienté vers ce métier pour allier rigueur scientifique et
              proximité avec les sportifs. Je crois en un accompagnement
              individualisé : chaque profil, chaque objectif et chaque
              contrainte méritent une approche qui leur est propre.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-12 md:mt-16">
          <div className="grid gap-4 md:grid-cols-3">
            {experiences.map((group) => (
              <div
                key={group.sport}
                className="rounded-2xl border border-line p-5"
              >
                <p className="text-sm font-semibold text-ink">
                  {group.sport}
                </p>
                <p className="text-xs text-anthracite-soft">{group.city}</p>

                <div className="mt-4 space-y-3">
                  {group.entries.map((entry, i) => (
                    <div
                      key={i}
                      className={i > 0 ? "border-t border-line pt-3" : ""}
                    >
                      <p className="text-xs font-medium text-ink">
                        {entry.role}
                      </p>
                      <p className="mt-0.5 text-xs text-anthracite-soft">
                        {entry.club}
                        {entry.level ? ` · ${entry.level}` : ""}
                      </p>
                      {entry.result && (
                        <p className="mt-1 text-xs font-medium text-accent">
                          {entry.result}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
