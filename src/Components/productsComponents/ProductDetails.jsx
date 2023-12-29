import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductDetails() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]); // Add 'id' as a dependency

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <div className='md:relative static'>
        <div className='relative md:static bg-gray-200 w-full h-screen flex md:flex-row-reverse flex-col justify-between items-center px-10 py-12'>
          <Link to='/products' className={`absolute ${!open ? 'z-30' : "z-0"} top-4 left-4 md:left-10 md:top-10 text-3xl md:text-4xl text-[#f43c09a7] md:text-black md:hover:text-[#f43c09a7] duration-300 w-8 cursor-pointer`}>
            <IoMdArrowRoundBack />
          </Link>

          <img src={product.images && product.images[1]} className='md:w-[35%] object-contain md:mt-0 mt-10' alt='Product Image' />

          <section className='md:w-[50%] py-24 text-[#f43c09a7]'>
            <h1 className='text-sm text-black font-bold uppercase'>{product.category}</h1>
            <h1 className='font-semibold text-4xl my-2 uppercase'>{product.title}</h1>
            <div className='flex mb-2 items-center'>
              {/* Your star rating icons */}
            </div>
            <p className='font-semibold text-3xl my-4'>${product.price}</p>
            <p className='text-2xl text-black'>{product.description}</p>
            <section className='pt-20'>
              <button className='bg-[#f43c09a7] md:w-auto w-full text-gray-100 shadow-lg hover:text-white py-2 px-6 md:mx-4 text-lg font-bold duration-200'>Buy Now</button>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
