import React from 'react'
import CartProduct from './CartProduct'

function ShoppingCart({ CartHandler, openSide, cartItems , cartQuantity , products}) {

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
                                <h2 className="text-lg mb-4 text-black">SHOPPING CART</h2>
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
                            {/* Checkout */}
                            <div className='absolute bottom-4 right-4'>
                            <p className='text-lg text-black'>Subtotal : ${
                                                            cartItems.reduce((total , cartItem)=> {
                                                                const item = products.find((item)=> item.id === cartItem.id)
                                                                return total + (item?.price || 0) * cartItem.quantity
                                                            }, 0)
                                                }</p>
                                <button className='md:absolute md:bottom-4 md:w-auto w-full bg-[#f43c09a7] text-white md:text-gray-200 md:hover:text-white border-t-2 border-t-gray-200 drop-shadow-md py-2 px-6  text-lg font-bold'>CHECK OUT</button>
                            </div>
                            {/* Overlay */}
                        </div>
                    </div>
                    {/* Button to toggle sidebar */}

                </>
            )}
        </>
    )
}

export default ShoppingCart