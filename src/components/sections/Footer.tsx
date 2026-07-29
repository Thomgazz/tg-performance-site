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

        <div className="flex items-center gap-5">
          <a
            href="tel:+33785527784"
            className="text-xs font-medium text-anthracite-soft hover:text-ink"
          >
            07 85 52 77 84
          </a>
          <a
            href="mailto:thomasgazon9@gmail.com"
            className="text-xs font-medium text-anthracite-soft hover:text-ink"
          >
            thomasgazon9@gmail.com
          </a>
          <a
            href="https://www.instagram.com/thomgazz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TG Performance sur Instagram"
            className="text-anthracite-soft transition-colors hover:text-ink"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
}
