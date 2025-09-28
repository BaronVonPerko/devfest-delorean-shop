export type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
  isNew: boolean
}

export type ShopItem = Item & {inCart?: boolean}
