import { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialLinks } from "@/components/contact/social-links";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me for collaborations, job opportunities, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Page Header - Left aligned */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground font-mono mb-2">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s Talk
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form - 60% */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Social Links & Info - 40% */}
          <div className="lg:col-span-2">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
