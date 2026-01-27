import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";
import type { Partner } from "@/types/contentful";

// =============================================================================
// Types
// =============================================================================

export interface PartnersStripProps {
  partners: Partner[];
  title?: string;
  className?: string;
}

// =============================================================================
// Component
// =============================================================================

export function PartnersStrip({
  partners,
  title = "Partenerii Noștri",
  className,
}: PartnersStripProps) {
  if (!partners || partners.length === 0) return null;

  return (
    <section className={cn("border-t border-sand-200 bg-white py-12", className)}>
      <Container>
        {title && (
          <h2 className="mb-8 text-center font-heading text-sm font-semibold uppercase tracking-wider text-sand-500">
            {title}
          </h2>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </div>
      </Container>
    </section>
  );
}

// =============================================================================
// Partner Logo
// =============================================================================

interface PartnerLogoProps {
  partner: Partner;
}

function PartnerLogo({ partner }: PartnerLogoProps) {
  const content = (
    <div className="relative h-12 w-32 grayscale transition-all duration-300 hover:grayscale-0">
      <Image
        src={partner.logo.url}
        alt={partner.name}
        fill
        className="object-contain"
      />
    </div>
  );

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        title={partner.name}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-500 focus-visible:ring-offset-2"
      >
        {content}
      </a>
    );
  }

  return content;
}

// =============================================================================
// Full Partners Section (for dedicated partners page)
// =============================================================================

interface PartnersSectionProps {
  partners: Partner[];
  sponsors?: Partner[];
  endorsements?: Partner[];
  className?: string;
}

export function PartnersSection({
  partners,
  sponsors,
  endorsements,
  className,
}: PartnersSectionProps) {
  const allPartners = partners.filter((p) => p.partnerType === "partner");
  const allSponsors = sponsors || partners.filter((p) => p.partnerType === "sponsor");
  const allEndorsements = endorsements || partners.filter((p) => p.partnerType === "endorsement");

  return (
    <div className={cn("space-y-16", className)}>
      {/* Partners */}
      {allPartners.length > 0 && (
        <div>
          <h2 className="mb-6 font-heading text-2xl font-semibold text-sand-900">
            Parteneri
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      )}

      {/* Sponsors */}
      {allSponsors.length > 0 && (
        <div>
          <h2 className="mb-6 font-heading text-2xl font-semibold text-sand-900">
            Sponsori
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allSponsors.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      )}

      {/* Endorsements */}
      {allEndorsements.length > 0 && (
        <div>
          <h2 className="mb-6 font-heading text-2xl font-semibold text-sand-900">
            Recomandări și Avizuri
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allEndorsements.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// Partner Card
// =============================================================================

interface PartnerCardProps {
  partner: Partner;
}

function PartnerCard({ partner }: PartnerCardProps) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-sand-200 bg-white p-6 transition-shadow hover:shadow-soft">
      <div className="relative h-16 w-16 flex-shrink-0">
        <Image
          src={partner.logo.url}
          alt={partner.name}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="font-heading font-semibold text-sand-900">
          {partner.name}
        </h3>
        {partner.description && (
          <p className="mt-1 text-sm text-sand-600 line-clamp-2">
            {partner.description}
          </p>
        )}
      </div>
    </div>
  );

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-500 focus-visible:ring-offset-2"
      >
        {content}
      </a>
    );
  }

  return content;
}
