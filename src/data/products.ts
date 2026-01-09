import type { Product } from "@/types";

// Merchandise items - update URLs when Bandcamp store is live
export const products: Product[] = [
  {
    id: "1",
    title: "Classic Logo Tee",
    price: "£25.00",
    image: "/images/merch/merch_Tshirt.png",
    url: "https://misterbounce.bandcamp.com/merch",
  },
  {
    id: "2",
    title: "Snapback Cap",
    price: "£22.00",
    image: "/images/merch/merch__hat.png",
    url: "https://misterbounce.bandcamp.com/merch",
  },
  {
    id: "3",
    title: "Tote Bag",
    price: "£18.00",
    image: "/images/merch/merch_tote.png",
    url: "https://misterbounce.bandcamp.com/merch",
  },
  {
    id: "4",
    title: "Limited Edition Vinyl",
    price: "£35.00",
    image: "/images/merch/vinyl.svg",
    url: "https://misterbounce.bandcamp.com/merch",
  },
];

// Store URL for "View All" button
export const STORE_URL = "https://misterbounce.bandcamp.com/merch";
