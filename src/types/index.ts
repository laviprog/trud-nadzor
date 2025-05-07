import { ReactNode } from 'react';

export type BadgeColor = 'red' | 'blue' | 'yellow' | 'green' | 'gray' | undefined;

export interface BadgeItem {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  color?: BadgeColor;
}

export interface Article {
  title: string;
  main: ReactNode;
}

export interface ServiceItem {
  title: string;
  heading: string;
  description: string;
  imageUrl: string;
  badges: BadgeItem[];
  articles: Article[];
}

export type ServiceKey = 'teploenergetika' | 'elektroenergetika' | 'promyshlennaya-bezopasnost';
