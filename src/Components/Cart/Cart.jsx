import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  reduceQuantity,
  incQuantity,
  myTotal,
  delMyItem,
  totalCardItemFun,
} from "../../Redux/Slices/cartSlice";

const Cart = () => {
  const { cartItems, totalPrice, totalCardItem } = useSelector(
    (state) => state.cartProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myTotal());
    dispatch(totalCardItemFun());
  }, [cartItems, dispatch]);

  return (
    <div className="w-[100%] flex flex-col  gap-4 items-center pt-7 relative">
      <div className="sticky top-[2rem] right-[9rem] self-end">
        <h1> Total Amount: {Math.round(totalPrice)} </h1>
        <h1>Total Item: {totalCardItem}</h1>
      </div>

      {cartItems?.map((mapProp) => (
        <div
          key={mapProp.id}
          className="w-[50%] border-2 border-black flex justify-between items-center"
        >
          <img
            src={mapProp.image}
            alt={mapProp.category}
            className="w-[4rem] h-[4rem] "
          />
          <div className="text-center">
            <p>price: {mapProp.price}</p>
            <p>category: {mapProp.category}</p>

            {/* --------- total amount */}
            <div className="flex items-start gap-3">
              <button
                type="button"
                className="bg-blue-500 text-white p-1 rounded-lg"
                onClick={() => {
                  dispatch(reduceQuantity(mapProp));
                }}
              >
                -
              </button>

              <p className="text-[1rem]">{mapProp.quantity}</p>

              <button
                type="button"
                className="bg-blue-500 text-white p-1 rounded-lg mb-3"
                onClick={() => {
                  dispatch(incQuantity(mapProp));
                }}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="bg-red-500 p-3 rounded-md"
              onClick={() => {
                dispatch(delMyItem(mapProp));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
