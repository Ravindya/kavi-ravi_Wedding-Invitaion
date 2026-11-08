import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

export const viewport: Viewport = {
  themeColor: "#8C6420",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kavindu & Ravindya — Traditional Sri Lankan Wedding Invitation",
  description:
    "Cordially inviting you to the traditional Sri Lankan Poruwa wedding celebration of Kavindu & Ravindya at Amaya Green Hotel, Yakkala.",
  keywords: [
    "Sri Lankan Wedding",
    "Poruwa Ceremony",
    "Sinhala Wedding Invitation",
    "Traditional Wedding",
    "Amaya Green Hotel, Yakkala",
    "Kavindu and Ravindya",
  ],
  authors: [{ name: "Kavindu & Ravindya" }],
  openGraph: {
    title: "Kavindu & Ravindya — Wedding Invitation (සාදර ඇරයුමයි)",
    description:
      "Join us as we celebrate our sacred vows on the traditional Golden Poruwa on March 10, 2027 at The Grand Ballroom, Amaya Green Hotel, Yakkala.",
    type: "website",
    locale: "si_LK",
    alternateLocale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Kavindu & Ravindya Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavindu & Ravindya — Wedding Invitation",
    description: "Traditional Sri Lankan Poruwa Wedding Invitation on March 10, 2027.",
    images: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Wedding of Kavindu & Ravindya",
    startDate: "2027-03-10T09:00:00+05:30",
    endDate: "2027-03-10T16:00:00+05:30",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Amaya Green (Grand Ballroom)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 110, Weeragula Road, Yakkala, Gampaha.",
        addressLocality: "Gampaha",
        postalCode: "00200",
        addressCountry: "LK",
      },
    },
    description:
      "Traditional Sri Lankan Poruwa wedding ceremony and banquet celebration of Kavindu and Ravindya.",
  };

  return (
    <html lang="si" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen text-ink-primary antialiased selection:bg-gold-champagne/40 selection:text-gold-deep">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
