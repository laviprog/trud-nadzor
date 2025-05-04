import { testData } from '@/data/tests';
import { notFound } from 'next/navigation';
import Quiz from '@/components/quiz/Quiz';

type TestType = keyof typeof testData;

export default async function TestPage({ params }: { params: Promise<{ test: string }> }) {
  const { test } = await params;
  const testKey = test as TestType;
  const data = testData[testKey];

  if (!data) {
    notFound();
  }

  return <Quiz questions={data.questions} testTitle={data.title} testPath={testKey} />;
}

export async function generateStaticParams() {
  return [
    { test: 'teploenergetika' },
    { test: 'elektroenergetika' },
    { test: 'promyshlennaya-bezopasnost' },
  ];
}
