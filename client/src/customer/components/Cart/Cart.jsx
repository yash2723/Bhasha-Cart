import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div className="my-32">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => <CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="">
            <p className="uppercase text-lg font-semibold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 mt-3 font-semibold">
              <div className="flex justify-between text-black">
                <span>Price</span>
                <span>₹2000</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">₹100</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span className="text-green-600">₹300</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount</span>
                <span className="text-green-600">₹2200</span>
              </div>
            </div>
            <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart