import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: `Privacy policy for ${SITE_CONFIG.name}`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-text-body mb-6">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>

          <h2 className="text-xl font-semibold text-text-heading mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-text-body mb-4">
            When you use our contact form, we collect the information you
            provide, including your name, email address, and message content.
            This information is used solely to respond to your enquiry.
          </p>

          <h2 className="text-xl font-semibold text-text-heading mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-text-body mb-4">
            We use the information you provide to:
          </p>
          <ul className="list-disc pl-6 text-text-body mb-4 space-y-2">
            <li>Respond to your booking enquiries and messages</li>
            <li>Provide information about upcoming events and appearances</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-heading mt-8 mb-4">
            Third-Party Services
          </h2>
          <p className="text-text-body mb-4">
            Our website uses embedded content from third-party services
            including YouTube, Mixcloud, and SoundCloud. These services may
            collect information about you according to their own privacy
            policies.
          </p>

          <h2 className="text-xl font-semibold text-text-heading mt-8 mb-4">
            Contact
          </h2>
          <p className="text-text-body mb-4">
            If you have any questions about this privacy policy, please contact
            us at{" "}
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
