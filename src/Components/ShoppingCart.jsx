import React from 'react'
import CartProduct from './CartProduct'

function ShoppingCart({ CartHandler, openSide, cartItems , cartQuantity }) {

    return (
        <>
            <span className="relative mr-6">
                <button onClick={CartHandler} >
                    <div className='absolute text-xs font-bold top-[-8px] right-[-12px] text-black p-[3px] rounded-full'>
                    {cartQuantity ? cartQuantity : null}
                    </div>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
            </span>
            {openSide && (
                <>
                    <div className="fixed md:w-full inset-0 overflow-scroll transition-all z-50 duration-300 ">
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 bg-black opacity-50 transition-opacity  duration-300"
                            onClick={CartHandler}
                        ></div>
                        {/* Sidebar */}
                        <div className="fixed inset-y-0 right-0 w-80 bg-gray-100 z-50 shadow-lg overflow-scroll">
                            {/* Sidebar content */}
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-4 text-[#F43A09]">CART</h2>
                                <button
                                    className="fixed top-2 right-2 text-[#F43A09] p-2"
                                    onClick={CartHandler}
                                >
                                    <ion-icon name='close'></ion-icon>
                                </button>
                                {
                                    cartItems.map((cartItem) => (
                                        <CartProduct key={cartItem.id} id={cartItem.id} quantity={cartItem.quantity} />
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    {/* Button to toggle sidebar */}

                </>
            )}
        </>
    )
}

export default ShoppingCart