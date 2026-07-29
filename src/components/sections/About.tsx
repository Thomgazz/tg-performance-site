import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

const experience = [
  "Préparation physique en Ligue 2 féminine de basketball",
  "Accompagnement d'un groupe U18 France basketball",
  "Expérience dans le rugby féminin haut niveau",
  "Plusieurs années comme éducateur football auprès de jeunes joueurs",
];

export function About() {
  return (
    <section id="a-propos" className="py-16 md:py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <PhotoPlaceholder
            label="Photo — accompagnement sportif"
            className="aspect-[4/3] w-full"
          />
        </Reveal>

        <Reveal delay={100}>
          <span className="text-sm font-medium tracking-wide text-accent">
            Qui suis-je
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Une méthode construite sur le terrain
          </h2>
          <p className="mt-5 text-base leading-relaxed text-anthracite-soft">
            Je suis préparateur physique. Mon approche est construite par
            l&apos;expérience terrain : accompagner des sportifs, analyser
            leurs besoins et construire des solutions adaptées.
          </p>

          <ul className="mt-6 space-y-3">
            {experience.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-base leading-relaxed text-anthracite-soft">
            Cette même rigueur, je la mets aujourd&apos;hui au service de
            toute personne qui veut retrouver un corps fort et durable — pas
            seulement des sportifs de haut niveau.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
