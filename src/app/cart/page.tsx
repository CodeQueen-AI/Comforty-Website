"use client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useCart } from "../context/cartcontext";
import Image from "next/image";

const Cart = () => {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setIsCheckoutSuccess(true);
    setIsOverlayVisible(false); 
  };

  const itemTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0;
  const discount = 0;
  const totalAmount = itemTotal + shipping - discount;

  const showOverlay = () => {
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <div className="font-sans container mx-auto p-6">
      <div className="p-10 text-left">
        <div className="flex items-center">
          <div className="w-2 h-12 bg-[#00B5A5] rounded-full mr-4"></div>
          <h1 className="text-4xl font-semibold text-gray-800">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600 mt-4">Your cart is empty</p>
        ) : (
          <div className="mt-8">
            <div className="overflow-x-auto hidden sm:block">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      ITEM
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      PRICE
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      QUANTITY
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      SUBTOTAL
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      REMOVE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border-b border-gray-300">
                        <div className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="mr-4"
                          />
                          <div>
                            <div className="text-sm">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        ${item.price}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 focus:outline-none focus:text-gray-600"
                          >
                            <FiMinus />
                          </button>
                          <span className="mx-2 text-gray-700">{item.quantity}</span>
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 focus:outline-none focus:text-gray-600"
                          >
                            <GoPlus />
                          </button>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 focus:outline-none focus:text-red-800"
                        >
                          <FaTrash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={showOverlay}
                className="px-8 py-2 bg-white text-[#00B5A5] border-2 border-[#00B5A5] hover:bg-[#00B5A5] hover:text-white hover:border-white transition-colors duration-300 w-40"
              >
                Checkout
              </button>
            </div>

            {isOverlayVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
                  <h3 className="text-2xl font-bold text-[#00B5A5] mb-4">Checkout Summary</h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Total Items:</span>
                      <span>${itemTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping:</span>
                      <span>${shipping}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Discount:</span>
                      <span>${discount}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold">
                      <span>Total Amount:</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                  <form className="space-y-6">
                    <div className="mb-4">
                      <label className="block text-lg font-medium text-gray-800" htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full p-4 border-2 border-[#00B5A5] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#00B5A5] transition duration-300 ease-in-out text-gray-800 placeholder:text-gray-400"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-lg font-medium text-gray-800" htmlFor="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Enter your Address"
                        className="w-full p-4 border-2 border-[#00B5A5] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#00B5A5] transition duration-300 ease-in-out text-gray-800 placeholder:text-gray-400"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-lg font-medium text-gray-800">Payment Method</label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full p-4 border-2 border-[#00B5A5] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#00B5A5] transition duration-300 ease-in-out text-gray-800"
                      >
                        <option value="" disabled>Select Payment Method</option>
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="cod">Cash on Delivery</option>
                      </select>
                    </div>
                    <button
                      onClick={handleCheckout}
                      type="button"
                      className="px-8 py-2 bg-[#00B5A5] text-white border-2 border-[#00B5A5] hover:bg-white hover:text-[#00B5A5] hover:border-[#00B5A5] transition-colors duration-300 w-full"
                    >
                      Confirm Checkout
                    </button>
                  </form>
                  <button
                    onClick={hideOverlay}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {isCheckoutSuccess && (
          <div className="mt-6 text-center text-green-500 text-xl font-semibold">
            🎉 Checkout completed successfully! 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
