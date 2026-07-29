import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";

const performanceTags = ["Professionnels", "Amateurs", "Jeunes en formation", "Clubs"];

const santeTags = [
  "Reprise d'activité",
  "Perte de poids",
  "Prise de muscle",
  "Mobilité",
  "Énergie",
  "Douleurs liées à la sédentarité",
];

export function AudienceSplit() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <div className="grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="h-full rounded-2xl border border-line bg-ink p-7 text-white md:p-8">
              <span className="text-xs font-medium tracking-wide text-white/60">
                Performance sportive
              </span>
              <h2 className="mt-3 text-xl font-semibold leading-tight md:text-[22px]">
                Développer les qualités physiques nécessaires à la
                performance, prévenir les blessures et accompagner la
                réathlétisation.
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {performanceTags.map((tag) => (
                  <Tag key={tag} tone="onDark">
                    {tag}
                  </Tag>
                ))}
              </div>
              <a
                href="#offres"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white"
              >
                Voir la préparation physique sportive
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="md:col-span-5">
            <div className="h-full rounded-2xl border border-line bg-surface p-7 md:p-8">
              <span className="text-xs font-medium tracking-wide text-accent">
                Santé &amp; transformation physique
              </span>
              <h2 className="mt-3 text-lg font-semibold leading-tight text-ink">
                Retrouver une meilleure condition physique, à son rythme,
                quel que soit le point de départ.
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {santeTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <a
                href="#offres"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                Voir le coaching hybride
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
