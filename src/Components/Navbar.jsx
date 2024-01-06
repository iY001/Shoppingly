import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import ShoppingCart from './ShoppingCart';
import { useShoppingCart } from '../Context/CartContext';
import DataFetching from '../data/DataFetching';
function Navbar({ open, setOpen }) {
    const [openSide, setOpenSide] = useState(false);

    const CartHandler = () => {
        setOpenSide(!openSide);
    };

    useEffect(() => {
        setOpenSide(false)
    }, [])
    const links = [
        { page: 'Home', url: '/' },
        { page: 'Products', url: '/products' },
        { page: 'About us', url: '/aboutus' },
    ];

    const { cartItems, cartQuantity } = useShoppingCart()
    const { products } = DataFetching()

    return (
        <>
            <div className="relative z-10 md:bg-white bg-[#F4F4F4]">
                <div className="container mx-auto flex justify-between items-center align-middle py-3 bg-[#F4F4F4] md:bg-white ">
                    {/* Your logo and mobile menu button */}
                    <div className="cursor-pointer mx-[-65px] md:mx-[-40px] mt-[-6px] md:mt-[-2px] py-2">
                        <h2 className="flex items-end font-normal text-[2rem] mx-[2.5em]">
                            Shopping
                            <p className="text-[#F43A09] text-[1.8rem]">.ly</p>
                        </h2>
                    </div>
                    {/* Mobile menu button */}
                    <nav>
                        <span className="bg-[#F4F4F4] md:bg-white text-[#F43A09] duration-500 text-3xl mx-6 align-middle md:hidden block">
                            <ShoppingCart CartHandler={CartHandler} openSide={openSide} cartQuantity={cartQuantity} setOpenSide={setOpenSide} cartItems={cartItems} products={products}/>
                            <button onClick={() => setOpen(!open)}>
                                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                            </button>
                        </span>
                        {/* Links */}
                        <ul className={`flex flex-col md:flex-row bg-[#F4F4F4] md:bg-white items-center text-[1.1rem] gap-[2em] md:flex md:items-center md:px-4 z-[-20] md:z-auto absolute md:static w-full md:w-auto left-0 py-6 md:py-0 pl-7 md:pl-0 opacity-0 md:opacity-100 top-[-400px] transition-all ease-in duration-500 ${open ? "top-[60px] opacity-100" : "top-[-80px] opacity-0"}`}>
                            {links.map((link, id) => (
                                <li key={id}>
                                    <Link
                                        className="text-black font-medium hover:opacity-[0.7] hover:text-[#F43A09]"
                                        to={`${link.url}`}
                                    >
                                        {link.page}
                                    </Link>
                                </li>
                            ))}
                            <Link
                                to="/signup"
                                className="md:bg-[#f0f0f0] md:px-[1.2rem] md:py-2 md:rounded-3xl hover:text-[#F43A09] font-medium  md:transition-all"
                            >
                                Sign Up
                            </Link>
                            <Link
                                to="/signin"
                                className="md:bg-[#f0f0f0] md:px-[1.2rem] md:py-2 md:rounded-3xl hover:text-[#F43A09] font-medium  md:transition-all"
                            >
                                Sign In
                            </Link>
                            {!open && (
                                <button onClick={CartHandler} className="relative bg-white w-100 md:bg-[#F43A09] md:text-white md:text-2xl text-center md:px-[0.4rem] md:py-[0.2rem] md:rounded-xl md:transition-all">
                                    <div className='absolute text-xs font-bold top-[-8px] right-[-4px] bg-[#f0f0f0] text-black p-[3px] rounded-full duration-200'>
                                        {cartQuantity ? cartQuantity : null}
                                    </div>
                                    <ion-icon name="cart-outline"></ion-icon>
                                </button>
                            )}
                            {openSide && (
                                <>
                                    <div className="fixed inset-0 overflow-scroll z-50">
                                        {/* Overlay */}
                                        <div
                                            className="fixed inset-0 bg-black opacity-50 transition-opacity"
                                            onClick={CartHandler}
                                        ></div>
                                        {/* Sidebar */}
                                        <div className="fixed inset-y-0 right-0 w-96 bg-gray-100 z-50 shadow-lg overflow-y-scroll">
                                            {/* Sidebar content */}
                                            <div className="p-4">
                                                <h2 className="text-lg font-bold mb-4 text-black">SHOPPING CART</h2>
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
                                            <div className='fixed bottom-4 right-6'>
                                                <p className='text-lg'>Subtotal : ${
                                                            cartItems.reduce((total , cartItem)=> {
                                                                const item = products.find((item)=> item.id === cartItem.id)
                                                                return total + (item?.price || 0) * cartItem.quantity
                                                            }, 0)
                                                }</p>
                                                <button className='md:bottom-4 w-full bg-[#f43c09a7] text-white md:text-gray-200 md:hover:text-white border-t-2 border-t-gray-200 drop-shadow-md py-2 px-6 text-lg font-bold'>CHECK OUT</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Button to toggle sidebar */}

                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;


