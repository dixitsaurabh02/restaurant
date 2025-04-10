import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif";
import PaymentModal from "../component/PaymentModal";
import AddressModal from "../component/AddressModal";

const Cart = () => {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePaymentClick = () => {
    setIsAddressModalOpen(true);
  };

  const handleAddressSubmit = (address) => {
    setDeliveryAddress(address);
    setIsAddressModalOpen(false);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ? (
          <div className="my-4 flex gap-3">
            {/* display cart items  */}
            <div className="w-full max-w-3xl ">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>

            {/* total cart item  */}
            <div className="w-full max-w-md ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price</p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500">₹</span> {totalPrice}
                </p>
              </div>
              <button 
                className="bg-red-500 w-full text-lg font-bold py-2 text-white hover:bg-red-600 transition duration-300"
                onClick={handlePaymentClick}
              >
                Payment
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full justify-center items-center flex-col">
              <img src={emptyCartImage} className="w-full max-w-sm" />
              <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
            </div>
          </>
        )}
      </div>

      <AddressModal 
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        onSubmit={handleAddressSubmit}
      />

      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={totalPrice}
        deliveryAddress={deliveryAddress}
      />
    </>
  );
};

export default Cart;
