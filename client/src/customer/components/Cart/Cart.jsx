import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
import { getCart } from '../../../state/cart/Action';

const Cart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store);

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  }

  useEffect(() => {
    dispatch(getCart())
  }, [cart.updateCartItem, cart.deleteCartItem])

  return (
    <div className="my-32">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => <CartItem item={item} />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="">
            <p className="uppercase text-lg font-semibold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 mt-3 font-semibold">
              <div className="flex justify-between text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">₹{cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span className="text-green-600">₹300</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount</span>
                <span className="text-green-600">₹{cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
            <button onClick={handleCheckout} type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart