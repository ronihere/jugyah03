import { minimalCardIcon, minimalicon2, minimalicon3, minimalicon4, minimalicon5, minimalicon6, minimalicon7, minimalicon8 } from "@/public/svgs";
import jugyah1 from '@/public/images/jugyah1.png';
import jugyah2 from '@/public/images/jugyah2.png';
import jugyah3 from '@/public/images/jugyah3.jpg';
import testi1 from '@/public/images/testimonial1.jpg'
import testi2 from '@/public/images/testimonial2.jpg'
import testi3 from '@/public/images/testimonial3.jpg'


const leaseRentBuyOptions = [
  {
    id: 1,
    value: 'Lease'
  },
  {
    id: 2,
    value: 'Rent'
  }
  , {
    id: 3,
    value: 'Buy'
  }
]
const cityList = [
  { id: 1, value: "Mumbai" },
  { id: 2, value: "Delhi" },
  { id: 3, value: "Bengaluru" },
  { id: 4, value: "Hyderabad" },
  { id: 5, value: "Ahmedabad" },
  { id: 6, value: "Chennai" },
  { id: 7, value: "Kolkata" },
  { id: 8, value: "Pune" },
  { id: 9, value: "Jaipur" },
  { id: 10, value: "Surat" },
  { id: 11, value: "Lucknow" },
  { id: 12, value: "Kanpur" },
  { id: 13, value: "Nagpur" },
  { id: 14, value: "Indore" },
  { id: 15, value: "Thane" },
  { id: 16, value: "Bhopal" },
  { id: 17, value: "Visakhapatnam" },
  { id: 18, value: "Pimpri-Chinchwad" },
  { id: 19, value: "Patna" },
  { id: 20, value: "Vadodara" },
];
const roomTypesList = [
  {
    id: 1,
    value: "Studio"
  }
  , {
    id: 2,
    value: "1 Bedroom"
  }
  , {
    id: 3,
    value: "2 Bedroom"
  }
  , {
    id: 4,
    value: 'Penthouse'
  }
]

const propertyList = [
  {
    "id": "32567",
    "image_link": jugyah2.src,
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
    "image_link": jugyah1.src,
    "price": 5000,
    "details": {
      "address": "123 Main Street, Anytown, CA 12345, san.",
      "square_footage": 80,
      "bedrooms": 3,
      "bathrooms": 2,
      "description": "Beautiful 3-bedroom, 2-bathroom house, a gourmet kitchen, and views. ."
    }
  },
  {
    "id": "67890",
    "image_link": jugyah3.src,
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
    "image_link": jugyah2.src,
    "price": 75000,
    "details": {
      "address": "456 Elm Street, Anytown, CA 98765",
      "square_footage": 90,
      "bedrooms": 4,
      "bathrooms": 3,
      "description": "Luxurious 4-bedroom, 3.5-bathroom house with a pool, and views."
    }
  },
  {
    "id": "32067",
    "image_link": jugyah3.src,
    "price": 75000,
    "details": {
      "address": "456 Elm Street, san, Anytown, CA 98765",
      "square_footage": 90,
      "bedrooms": 4,
      "bathrooms": 3,
      "description": "Luxurious 4-bedroom, 3.5-bathroom house with a pool, and views."
    }
  },
  {
    "id": "30267",
    "image_link": jugyah1.src,
    "price": 75000,
    "details": {
      "address": "456 Elm Street, san, Anytown, CA 98765",
      "square_footage": 90,
      "bedrooms": 4,
      "bathrooms": 3,
      "description": "Luxurious 4-bedroom, 3.5-bathroom house with a pool, and views."
    }
  }
  

]

const sellingPointList = [
  {
    id: 1,
    icon: minimalCardIcon.src,
    title: "Pay as Little as possible!"
  },
  {
    id: 2,
    icon: minimalicon2.src,
    title: "Enjoy wisdom of community!"
  },
  {
    id: 3,
    icon: minimalicon3.src,
    title: "Let's somebody else takecare"
  }
  ,
  {
    id: 4,
    icon: minimalicon4.src,
    title: "Enjoy peaceful Environment!"
  },
  {
    id: 5,
    icon: minimalicon5.src,
    title: "Stay Safe! Save Money!"
  },
  {
    id: 6,
    icon: minimalicon6.src,
    title: "Good Surrounding"
  },
  {
    id: 7,
    icon: minimalicon7.src,
    title: "Zero Deposit"
  },
  {
    id: 8,
    icon: minimalicon8.src,
    title: "Pay for what you use !"
  }

]

const testimonials = [{
  name: "Harry Larsor",
  desc: "The best testimonials are authentic. This is not a place for copywriters to fake it ‘till you make it… Your customer testimonials should be just that: from the customer. There are other places your copywriting can shine."
  ,
  image:testi1.src
}, {
  name: ' Joe Guten',
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa.",
  img:testi2.src
 }, {
  name: 'Will Cally',
  desc: "Testimonials aren’t the sort of thing you should ever be faking. Not only is this a terrible example of false advertising, but people can smell a fake testimonial a mile away. You’ll do far better using genuine, real testimonials from people who have actually benefitted from your brand. ",
  img:testi3.src
  }]

export type TpropertyList = typeof propertyList

export { cityList, roomTypesList, propertyList, sellingPointList, leaseRentBuyOptions, testimonials};
