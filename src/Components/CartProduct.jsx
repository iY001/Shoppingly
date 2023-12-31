import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { useShoppingCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

function CartProduct({ id, quantity }) {
  const [product, setProduct] = useState({ images: [], thumbnail: '' });

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

  const {removeItem } = useShoppingCart()
  return (
    <div className='flex w-full mt-8 align-middle items-center'>
      <Link to={`/products/product-details/${id}`} className='flex'>
      {product.images.length > 0 && (
        <img src={product.images[0]} className='w-[40%] object-fill' alt='Product Image' />
      )}
      <section className='px-3 w-full'>
        <p className='text-xs uppercase'>{product.category}</p>
        <p className='text-lg text-[#F43A09] uppercase'>{product.title}</p>
        <p className='text-lg font-bold'>${product.price}</p>
      </section>
      </Link>
      <div className='w-full flex justify-end items-center  '>

         <p className='text-lg font-medium'>
          {
           quantity > 1 ? `x${quantity}` : ""
         }
         </p>

        <button
          onClick={()=>{removeItem(id)}}
          className=' bg-red-700 h-12 hover:bg-red-600 duration-300 shadow-xl text-lg py-3 px-3 mx-2'><MdDelete color='white' />
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
