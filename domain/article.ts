export const ArticleCategory = {
  TECH: "tech",
  DESIGN: "design",
  DAILY: "daily",
};

type ArticleCategoryType =
  (typeof ArticleCategory)[keyof typeof ArticleCategory];

export interface Article {
  title: string;
  description: string;
  category: ArticleCategoryType;
}
