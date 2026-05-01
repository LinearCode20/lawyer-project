import AreasOfLaw from "./Areas-of-law/areas-of-law";

export default function WhyChooseUs() {
  return (
    <>
      <section className="p-4   py-13  " id="area-of-law">
        <div className="md:max-w-6xl mx-auto    ">
          <div>
            <h2 className="heading text-center mb-4!">
              Practice areas covered
            </h2>

            <div className="mt-12">
              <AreasOfLaw />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
