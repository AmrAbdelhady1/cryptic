import Image from "next/image";

interface Product {
  product: {
    name: string;
    type: string;
    desc: string;
    image: string;
    price: string;
    priceAfterDiscount: string;
    onSale: boolean;
  };
}

const ProductCard = ({ product }: Product) => {
  return (
    <div className="w-full flex flex-col gap-5 text-blackPrimary">
      <div className="relative cursor-pointer overflow-hidden w-full rounded-[10px]">
        {product.onSale && (
          <div className="absolute top-4 right-4 bg-primary rounded-[5px] py-2 px-4 duration-300 hover:bg-white z-10">
            On Sale
          </div>
        )}
        <Image
          src={product.image}
          alt="product"
          width={600}
          height={400}
          className="w-full h-[300px] md:h-[400px] object-cover duration-[1500ms] hover:scale-125"
        />
      </div>

      <div className="flex flex-col gap-[10px] mb-[10px]">
        <p className="uppercase text-hover">{product.type}</p>
        <p className="text-32 text-hover">{product.name}</p>
        <p>{product.desc}</p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-3 lg:items-center justify-between">
        <button className="btn-yellow btn-black">Add to Cart</button>
        <p className="md:text-lg font-medium flex items-center gap-2">
          $ {product.price} USD
          {product.onSale && <del className="font-normal">$ {product.priceAfterDiscount} USD</del>}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
