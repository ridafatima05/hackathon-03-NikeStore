import SlidingCarousel from "./Carousel";

const products = [
  {
    id: "1",
    name: "Nike Air Max 1",
    category: "Men's Shoes",
    price: "9999",
    image: "/images/Image (5).png",
  },
  {
    id: "2",
    name: "Nike Air Max 2",
    category: "Women's Shoes",
    price: "8999",
    image: "/images/Image (5).png",
  },
  {
    id: "3",
    name: "Nike Air Max 3",
    category: "Men's Shoes",
    price: "10999",
    image: "/images/Image (6).png",
  },
  {
    id: "4",
    name: "Nike Air Max 3",
    category: "Men's Shoes",
    price: "10999",
    image: "/images/Image (6).png",
  },
  {
    id: "5",
    name: "Nike Air Max 3",
    category: "Men's Shoes",
    price: "10999",
    image: "/images/Rectangle (37).png",
  },
  {
    id: "6",
    name: "Nike Air Max 3",
    category: "Men's Shoes",
    price: "10999",
    image: "/images/Rectangle (2).png",
  },
];

export default function HomePage() {
  return (
    <div>
      <SlidingCarousel products={products} />
    </div>
  );
}
