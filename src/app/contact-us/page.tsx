import ContactForm from "@/components/contact-form";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 grow">
      <section className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="mb-4">
          Have any Question? Send a quick Message and we'll reply shortly
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
