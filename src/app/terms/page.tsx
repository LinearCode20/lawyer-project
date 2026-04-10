"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-2">
            Website Terms of Use – Law Edge
          </h1>

          <ol className="list-decimal pl-6 space-y-10">
            <li>
              <h2 className="text-xl font-semibold mb-3">Introduction</h2>
              <p>
                These Terms of Use govern access to and use of the Law Edge
                website and services. By accessing this website or subscribing
                to Law Edge content, you agree to comply with these Terms.
              </p>
              <p className="mt-2">
                Law Edge provides legal insight, commentary and continuing
                professional development (CPD) content for legal professionals.
                The content is designed to support learning and professional
                development but does not constitute legal advice.
              </p>
              <p className="mt-2">
                If you do not agree to these Terms, you must not use the website
                or subscribe to Law Edge services.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">About Law Edge</h2>
              <p>
                Law Edge provides practical legal insights and commentary
                designed to assist lawyers and law firms with continuing
                professional development.
              </p>
              <p className="mt-2">
                Content may be delivered through the website, email newsletters
                or other digital channels.
              </p>
              <p className="mt-2">
                Law Edge may update or modify its services, content, or delivery
                methods from time to time.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">Eligibility</h2>
              <p>
                The website and services are intended primarily for legal
                professionals including solicitors, barristers, trainees, and
                legal practitioners.
              </p>
              <p className="mt-2">
                By subscribing or using the website, you confirm that the
                information you provide is accurate and that you are authorised
                to access the services.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">CPD Content</h2>
              <p>
                Law Edge provides learning materials intended to assist
                professionals in maintaining their continuing professional
                development.
              </p>
              <p className="mt-2">
                While content may contribute towards CPD requirements, users
                remain responsible for ensuring that their professional
                regulator’s CPD requirements are satisfied.
              </p>
              <p className="mt-2">
                Law Edge does not guarantee that use of its services alone will
                satisfy the CPD requirements of any regulatory body.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">No Legal Advice</h2>
              <p>
                Content provided through Law Edge is for informational and
                educational purposes only.
              </p>
              <p className="mt-2">
                The materials should not be relied upon as legal advice. Users
                should seek appropriate professional advice before taking or
                refraining from any action based on the content.
              </p>
              <p className="mt-2">
                Law Edge accepts no responsibility for decisions made based on
                the information provided through the website or newsletters.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">
                Intellectual Property
              </h2>
              <p>
                All content on the Law Edge website and in Law Edge
                publications, including text, graphics, design, branding and
                materials, is owned by or licensed to Law Edge.
              </p>
              <p className="mt-2">
                Users may access content for personal professional use only.
              </p>
              <p className="mt-2">
                Users must not copy, reproduce, distribute, publish, or
                commercially exploit any content without prior written
                permission from Law Edge.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">
                Subscription and Communications
              </h2>
              <p>
                By subscribing to Law Edge, users consent to receiving
                communications including CPD content, updates and newsletters.
              </p>
              <p className="mt-2">
                Users may unsubscribe at any time through the unsubscribe link
                provided in email communications.
              </p>
              <p className="mt-2">
                Law Edge reserves the right to modify or discontinue
                subscription services at its discretion.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">
                Website Availability
              </h2>
              <p>
                Law Edge will use reasonable efforts to maintain access to the
                website and services but does not guarantee uninterrupted
                availability.
              </p>
              <p className="mt-2">
                Access may be temporarily suspended for maintenance, updates or
                technical reasons.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Law Edge shall not be
                liable for any loss or damage arising from use of the website or
                reliance on its content.
              </p>
              <p className="mt-2">
                This includes but is not limited to indirect, consequential or
                economic loss.
              </p>
              <p className="mt-2">
                Nothing in these Terms limits liability where such limitation
                would be unlawful.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">Third-Party Links</h2>
              <p>
                The website may contain links to third-party websites or
                resources. Law Edge does not control and is not responsible for
                the content or availability of those sites.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">Privacy</h2>
              <p>
                Law Edge processes personal data in accordance with its Privacy
                Policy.
              </p>
              <p className="mt-2">
                Users should review the Privacy Policy to understand how their
                information is collected and used.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">
                Changes to These Terms
              </h2>
              <p>
                Law Edge may update these Terms from time to time. Continued use
                of the website following any changes constitutes acceptance of
                the updated Terms.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
              <p>
                These Terms shall be governed by and interpreted in accordance
                with the laws of England and Wales.
              </p>
              <p className="mt-2">
                Any disputes arising in connection with the website or services
                shall be subject to the exclusive jurisdiction of the courts of
                England and Wales.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p>
                If you have any questions regarding these Terms, please contact:
              </p>
              <p className="mt-2">
                Law Edge – Email:{" "}
                <Link
                  href="mailto:contact@lawedge.co.uk"
                  className="underline "
                >
                  contact@lawedge.co.uk
                </Link>
              </p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
