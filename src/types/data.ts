export type TProduct = {
  id: number;
  category?: string;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
};

export type TCategory = {
  name: string;
  href: string;
}
