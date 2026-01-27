import { Section } from "@/components/ui/Section";

// =============================================================================
// Types
// =============================================================================

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface StatsSectionProps {
  stats?: Stat[];
  variant?: "default" | "lagoon" | "cards";
}

// =============================================================================
// Default Stats
// =============================================================================

const defaultStats: Stat[] = [
  {
    value: "15+",
    label: "Ani de Experiență",
    description: "De peste 15 ani formăm micii campioni ai apei",
  },
  {
    value: "10.000+",
    label: "Copii Absolvenți",
    description: "Mii de copii au învățat să înoate cu noi",
  },
  {
    value: "50+",
    label: "Instructori Certificați",
    description: "Echipa noastră de profesioniști dedicați",
  },
  {
    value: "98%",
    label: "Părinți Mulțumiți",
    description: "Rata de satisfacție a familiilor noastre",
  },
];

// =============================================================================
// Component
// =============================================================================

export function StatsSection({
  stats = defaultStats,
  variant = "lagoon",
}: StatsSectionProps) {
  if (variant === "lagoon") {
    return (
      <Section
        background="lagoon"
        spacing="lg"
        className="bg-gradient-to-br from-lagoon-600 to-lagoon-700"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-semibold text-lagoon-100">{stat.label}</p>
              {stat.description && (
                <p className="mt-1 text-sm text-lagoon-200">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </Section>
    );
  }

  if (variant === "cards") {
    return (
      <Section background="white" spacing="lg">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-sand-50 p-6 text-center"
            >
              <p className="font-heading text-3xl font-bold text-lagoon-600 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 font-semibold text-sand-900">{stat.label}</p>
              {stat.description && (
                <p className="mt-1 text-sm text-sand-600">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </Section>
    );
  }

  // Default variant
  return (
    <Section background="sand" spacing="lg">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-4xl font-bold text-lagoon-600 md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 font-semibold text-sand-900">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
