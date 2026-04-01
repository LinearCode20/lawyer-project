import DownloadFreeSample from "@/components/download-free-sample";
import SubscribeFree from "@/components/subscribe-free";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe-client";

export default function Page() {
  return (
    <section className="p-4 py-20  ">
      <div className="container mx-auto grid md:grid-cols-2 gap-4">

        <Elements stripe={stripePromise}>
  <SubscribeFree />
</Elements>

        {/* <SubscribeFree /> */}
        <DownloadFreeSample />
      </div>
    </section>
  );
}
