import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAllProperties = async () => {
  await delay(1000);
  return propertyList;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const propertyList = [
  {
    "id": "32567",
    "image_link": "https://example.com/property_images/34567.jpg",
    "price": 1200,
    "details": {
      "address": "2578 Folsom street, san francisco, CA, 94110",
      "square_footage": 75,
      "bedrooms": 4,
      "bathrooms": 3.5,
      "description": "Private Room"
    }
  },
  {
    "id": "12345",
    "image_link": "https://example.com/property_images/12345.jpg",
    "price": 5000,
    "details": {
      "address": "123 Main Street, Anytown, CA 12345",
      "square_footage": 80,
      "bedrooms": 3,
      "bathrooms": 2,
      "description": "Beautiful 3-bedroom, 2-bathroom house, a gourmet kitchen, and views. ."
    }
  },
  {
    "id": "67890",
    "image_link": "https://example.com/product_images/67890.png",
    "price": 299.99,
    "details": {
      "address": "123 Main Street, Anytown, CA 12345",
      "square_footage": 200,
      "bedrooms": 3,
      "bathrooms": 2,
      "description": "Beautiful 3-bedroom, spacious backyard, garage. Perfect for family."
    }
  },
  {
    "id": "34567",
    "image_link": "https://example.com/property_images/34567.jpg",
    "price": 75000,
    "details": {
      "address": "456 Elm Street, Anytown, CA 98765",
      "square_footage": 90,
      "bedrooms": 4,
      "bathrooms": 3,
      "description": "Luxurious 4-bedroom, 3.5-bathroom house with a pool, and views."
    }
  },

]

export type TpropertyList = typeof propertyList
