import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const [hasPrime,setHasPrime] = useState(Math.random()< 0.5);

  return (
    <div className="">
      <p>{category}</p>
      <Image
        src={image}
        width={100}
        height={200}
        objectFit="contain"
        // className="cursor-pointer"
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
      <p>{description}</p>
      <div className="">

      </div>
    </div>
  );
};

export default Product;
