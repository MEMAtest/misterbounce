import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_CONFIG.name}`,
  description: `Terms of service for ${SITE_CONFIG.name}`,
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-text-body mb-6">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>

          <h2 className="text-xl font-semibold text-text-heading mt-8 mb-4">
            Use of Website
          </h2>
          <p className="text-text-body mb-4">
            This website is provided for informational purposes about{" "}
            {SITE_CONFIG.name}&apos;s services, events, and music. By using this
            website, you agree to these terms.
          </p>

          <h2 className="text-xl font-semibold text-text-heading mt-8 mb-4">
            Booking Enquiries
          </h2>
          <p className="text-text-body mb-4">
            Submitting a booking enquiry through our contact form does not
            constitute a confirmed booking. All bookings are subject to
            availability and confirmation via email.
          </p>

          <h2 className="text-xl font-semibold text-text-heading mt-8 mb-4">
            External Links
          </h2>
          <p className="text-text-body mb-4">
            This website contains links to external sites including social media
            platforms, music streaming services, and merchandise stores. We are
            not responsible for the content or practices of these external
            sites.
          </p>

          <h2 className="text-xl font-semibold text-text-heading mt-8 mb-4">
            Intellectual Property
          </h2>
          <p className="text-text-body mb-4">
            All content on this website, including images, logos, and text, is
            the property of {SITE_CONFIG.name} unless otherwise stated.
            Unauthorized use is prohibited.
          </p>

          <h2 className="text-xl font-semibold text-text-heading mt-8 mb-4">
            Contact
          </h2>
          <p className="text-text-body mb-4">
            For any questions regarding these terms, please contact us at{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-primary hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
