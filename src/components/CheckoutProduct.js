import { StarIcon } from "@heroicons/react/solid";
import Image from "next/legacy/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    //push into redux
    dispatch(addToBasket(product));
  };

  const removeItemsFromBasket =() => {
    dispatch(removeFromBasket({id}))
  }

  return (
    <div className="grid grid-cols-5 justify-items-start ">
      {/* <div className="col-spans-1"> */}
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* </div> */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="INR" />
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              src="https://links.papareact.com/fdw"
              alt=""
              className="w-12"
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button mt-auto" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button mt-auto" onClick={removeItemsFromBasket} >Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
