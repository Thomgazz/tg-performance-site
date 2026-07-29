import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function AudienceSplit() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="h-full rounded-2xl border border-line bg-ink p-8 text-white md:p-10">
              <span className="text-xs font-medium tracking-wide text-white/60">
                Performance sportive
              </span>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-[26px]">
                J&apos;accompagne les sportifs à développer leurs qualités
                physiques pour être plus performants et plus résistants.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Clubs, athlètes compétiteurs, jeunes sportifs ambitieux :
                programmation, tests physiques et prévention des blessures.
              </p>
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
            <div className="h-full rounded-2xl border border-line bg-surface p-8 md:p-10">
              <span className="text-xs font-medium tracking-wide text-accent">
                Santé &amp; transformation physique
              </span>
              <h2 className="mt-3 text-xl font-semibold leading-tight text-ink">
                J&apos;aide les personnes actives à retrouver un corps fort et
                performant, avec une méthode progressive adaptée à leur
                quotidien.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-anthracite-soft">
                La même rigueur de terrain et la même méthode scientifique,
                mises au service de toute personne qui veut progresser — pas
                seulement des sportifs de haut niveau.
              </p>
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
