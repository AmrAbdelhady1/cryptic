import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Leather Card Wallet",
    type: "accessories",
    desc: "The Card Wallet offers ample storage for life’s essentials; cards, business cards, transport ticket and cash.",
    image: "/assets/images/shop/product-4.jpg",
    price: "250.00",
    priceAfterDiscount: "300.00",
    onSale: true,
  },
  {
    id: 2,
    name: "ULX Leather Wallet",
    type: "accessories",
    desc: "The Card Wallet offers ample storage for life’s essentials; cards, business cards, transport ticket and cash.",
    image: "/assets/images/shop/product-3.jpg",
    price: "150.00",
    priceAfterDiscount: "0",
    onSale: false,
  },
];

const MoreProducts = () => {
  return (
    <div className="main-container !bg-lightPrimary">
      <div className="global-width flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <p className="text-48">Find more products</p>
          <Link href="/shop" className="btn-yellow">View All</Link>
        </div>

        <div className="flex flex-col md:flex-row gap-[30px] w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
