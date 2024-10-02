import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Slices/cartSlice";

const Products = () => {
  const myProducts = useSelector((state) => state.shopingCartProduct);
  const dispatch = useDispatch();

  const myCartData = (mySelectedCard) => {
    dispatch(addProduct(mySelectedCard));
  };

  return (
    <div className="w-[100%] flex flex-wrap gap-4 justify-center pt-7 ">
      {myProducts?.map((mapProp) => (
        <div
          key={mapProp.id}
          className="basis-[20%] border-2 border-black flex flex-col justify-around items-start"
        >
          <img
            src={mapProp.image}
            alt={mapProp.category}
            className="w-[100%] "
          />
          <div className="text-center">
            <p>price: {mapProp.price}</p>
            <p>category: {mapProp.category}</p>
            <button
              type="button"
              className="bg-blue-500 text-white p-5 mt-4 rounded-lg mb-3"
              onClick={() => {
                myCartData(mapProp);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
