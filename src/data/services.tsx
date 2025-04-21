import { FaBolt, FaFire, FaHardHat } from "react-icons/fa";
import { Service } from "../types/types";

export const ServiceData = {
  teploenergetika: {
    title: "Теплоэнергетика",
  },
  elektroenergetika: {
    title: "Электроэнергетика",
  },
  "promyshlennaya-bezopasnost": {
    title: "Промышленная безопасность",
  },
};

export const services: Service[] = [
  {
    id: "heat",
    title: "Теплоэнергетика",
    icon: <FaFire />,
    shortDescription:
      "Подготовим к аттестации по всем разделам теплоэнергетики.",
    duration: "3 дня",
    format: "Онлайн",
    target: "Инженеры, операторы котельных",
    price: "4 900 ₽",
    link: "/uslugi/teploenergetika",
    label: "🔥 Часто выбирают",
    rating: 4,
    reviewsCount: 96,
  },
  {
    id: "electro",
    title: "Электроэнергетика",
    icon: <FaBolt />,
    shortDescription: "Готовим к аттестации по электробезопасности и ПТЭЭП.",
    duration: "4 дня",
    format: "Смешанный",
    target: "Электромонтёры, инженеры-энергетики",
    price: "5 200 ₽",
    link: "/uslugi/elektroenergetika",
    rating: 5,
    reviewsCount: 150,
  },
  {
    id: "pb",
    title: "Промышленная безопасность",
    icon: <FaHardHat />,
    shortDescription: "Подготовка к аттестации по ПБ, охране труда и ГОЧС.",
    duration: "5 дней",
    format: "Очно и онлайн",
    target: "Ответственные за ПБ, специалисты ОТ",
    price: "5 800 ₽",
    link: "/uslugi/promyshlennaya-bezopasnost",
    rating: 4,
    reviewsCount: 72,
  },
];