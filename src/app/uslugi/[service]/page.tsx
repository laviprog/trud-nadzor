import { ServiceData } from "@/data/services";
import { notFound } from "next/navigation";

type TestType = keyof typeof ServiceData;

export default async function TestPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const testKey = service as TestType;
  const data = ServiceData[testKey];

  if (!data) {
    notFound();
  }

  return (
    <section className="flex justify-center bg-[var(--white)] text-[var(--black)]">
      <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-center">
        Тут будет подробная информация о {data.title}
        </h1>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return [
    { service: "teploenergetika" },
    { service: "elektroenergetika" },
    { service: "promyshlennaya-bezopasnost" },
  ];
}
