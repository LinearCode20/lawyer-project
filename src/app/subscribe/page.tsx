import DownloadFreeSample from "@/components/download-free-sample";
import SubscribeFree from "@/components/subscribe-free";

export default function Page() {
  return (
    <section className="p-4 py-20  ">
      <div className="container mx-auto grid md:grid-cols-2 gap-4">
        <SubscribeFree />
        <DownloadFreeSample />
      </div>
    </section>
  );
}
