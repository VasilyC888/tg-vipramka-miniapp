import { Injectable } from '@angular/core';
import {group} from "@angular/animations";

export enum ProductType {
  White = 'white',
  Color = 'color',
  Usa = 'usa'
}


export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

const products: IProduct[] = [
  {
    id: "29",
    text: "Рамки под номера с надписью BRAZZERS подходят под любые типы автомобителей",
    title: "BRAZZERS",
    link: "https://www.instagram.com/vip_ramka.md/",
    image: "../assets/images/ramka3.jpeg",
    time: "2 days ago",
    type: ProductType.Color,
  },
  {
    id: "30",
    text: "Рамки под номера с надписью FUCK FUEL ECONOMY подходят под любые типы автомобителей.",
    title: "FUCK FUEL ECONOMY ",
    link: "https://www.instagram.com/vip_ramka.md/",
    image: "../assets/images/ramka4.jpeg",
    time: "1 day ago",
    type: ProductType.White,
  },
  {
    id: "910",
    text: "Рамки под номера с надписью GMC подходят под любые типы автомобителей.",
    title: "GMC",
    link: "https://www.instagram.com/vip_ramka.md/",
    image: "../assets/images/ramks6.jpg",
    time: "3 days ago",
    type: ProductType.Usa,
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products: IProduct[] = products;

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }

      group[prod.type].push(prod);

      return group;
    }, {})
  }
}
