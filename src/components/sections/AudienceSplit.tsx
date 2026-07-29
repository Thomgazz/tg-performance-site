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
                J&apos;accompagne les sportifs et les clubs dans le
                développement de leurs qualités physiques grâce à une
                préparation structurée.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Sportifs professionnels, amateurs, jeunes sportifs ambitieux
                ou clubs : tests physiques, programmation, développement des
                capacités et prévention des blessures.
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
                J&apos;accompagne toute personne qui souhaite reprendre une
                activité physique, retrouver de l&apos;énergie ou transformer
                durablement son corps.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-anthracite-soft">
                Perte de poids, prise de muscle, retour à l&apos;activité,
                mobilité : chaque parcours part d&apos;une analyse de votre
                situation et avance à votre rythme.
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
