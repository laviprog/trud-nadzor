export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center max-md:text-3xl">
        404 - Страница не найдена
      </h1>
      <p className="mt-4 text-xl text-center max-md:text-lg">
        К сожалению, страница, которую вы ищете, не существует.
      </p>
    </section>
  );
}
