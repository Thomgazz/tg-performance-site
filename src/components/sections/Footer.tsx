import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="text-ink">
          <Logo />
        </div>

        <p className="text-xs text-anthracite-soft">
          © {new Date().getFullYear()} TG Performance. Tous droits réservés.
        </p>

        <a
          href="mailto:contact@tg-performance.fr"
          className="text-xs font-medium text-anthracite-soft hover:text-ink"
        >
          contact@tg-performance.fr
        </a>
      </Container>
    </footer>
  );
}
