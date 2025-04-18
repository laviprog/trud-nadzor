export type Service = {
    id: string;
    title: string;
    icon: React.ReactNode;
    shortDescription: string;
    duration: string;
    format: string;
    target: string;
    price: string;
    link: string;
    label?: string; // Например: "🔥 Часто выбирают"
    rating?: number; // от 0 до 5
    reviewsCount?: number;
  };
  