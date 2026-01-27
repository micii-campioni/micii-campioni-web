import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Service } from "@/types/contentful";

// =============================================================================
// Types
// =============================================================================

export interface ServicesSectionProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  description?: string;
}

// =============================================================================
// Component
// =============================================================================

export function ServicesSection({
  services,
  title = "Serviciile Noastre",
  subtitle = "Ce Oferim",
  description = "Descoperă programele noastre de educație acvatică, create special pentru fiecare etapă de dezvoltare a copilului tău.",
}: ServicesSectionProps) {
  if (services.length === 0) return null;

  // Only show header if title is provided
  const showHeader = title && title.length > 0;

  return (
    <Section background="sand" spacing="xl">
      {showHeader && (
        <SectionHeader title={title} subtitle={subtitle} description={description} />
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}

// =============================================================================
// Service Card
// =============================================================================

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  // Get first age group's age range if available
  const primaryAgeRange = service.ageGroups?.[0]?.ageRange;

  return (
    <Link
      href={`/servicii/${service.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-500 focus-visible:ring-offset-2"
    >
      <Card
        variant="default"
        padding="none"
        hoverEffect
        className="h-full overflow-hidden"
      >
        {/* Image */}
        {service.heroImage && (
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={service.heroImage.url}
              alt={service.heroImage.title || service.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Age badge */}
            {primaryAgeRange && (
              <Badge
                variant="lagoon"
                className="absolute left-4 top-4"
              >
                {primaryAgeRange}
              </Badge>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <CardTitle as="h3" className="group-hover:text-lagoon-600">
            {service.title}
          </CardTitle>
          {service.shortDescription && (
            <CardDescription className="line-clamp-2">
              {service.shortDescription}
            </CardDescription>
          )}

          {/* Age groups preview */}
          {service.ageGroups && service.ageGroups.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {service.ageGroups.slice(0, 3).map((ageGroup) => (
                <span
                  key={ageGroup.name}
                  className="inline-flex items-center gap-1.5 text-sm text-sand-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-lagoon-500" />
                  {ageGroup.ageRange}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-4 flex items-center gap-2 font-medium text-lagoon-600">
            <span>Află mai multe</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

// =============================================================================
// Compact Services Grid (for sidebars or smaller sections)
// =============================================================================

export interface CompactServicesProps {
  services: Service[];
  title?: string;
}

export function CompactServices({
  services,
  title = "Alte Servicii",
}: CompactServicesProps) {
  if (services.length === 0) return null;

  return (
    <div>
      {title && (
        <h3 className="mb-4 font-heading text-lg font-semibold text-sand-900">
          {title}
        </h3>
      )}
      <div className="space-y-3">
        {services.map((service) => {
          const primaryAgeRange = service.ageGroups?.[0]?.ageRange;

          return (
            <Link
              key={service.slug}
              href={`/servicii/${service.slug}`}
              className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-sand-50"
            >
              {service.heroImage && (
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={service.heroImage.url}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h4 className="font-medium text-sand-900 group-hover:text-lagoon-600">
                  {service.title}
                </h4>
                {primaryAgeRange && (
                  <p className="text-sm text-sand-500">{primaryAgeRange}</p>
                )}
              </div>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-sand-400 transition-transform group-hover:translate-x-1 group-hover:text-lagoon-500" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
