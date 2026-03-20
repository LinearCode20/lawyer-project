import React from "react";
import { areaOfLaw } from "@/app/law-area/[slug]/data";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find the area that matches the slug
  const area = areaOfLaw.find((item) => item.link === `/law-area/${slug}`);

  if (!area) {
    notFound();
  }

  return (
    <div className=" grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{area.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">{area.answer}</p>

      {area.component && (
        <div className="mt-8">
          <area.component />
        </div>
      )}
    </div>
  );
}
