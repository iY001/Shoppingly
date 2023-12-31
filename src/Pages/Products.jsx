import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/productsComponents/SearchBar'
import ProductCard from '../Components/productsComponents/ProductCard';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import DataFetching from '../data/DataFetching';
import ProductModal from '../Components/productsComponents/ProductModal';
import Notification from '../Components/productsComponents/Notification';


function Products() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState('');

  useEffect(() => {
    setWidth('md:w-[240px] w-[140px]');
  }, []);

  const { products } = DataFetching();
  console.log(products)

  const [ showModal , setShowModal ] = useState(false)
  const ModalHandler = ()=>{
    setShowModal(!showModal)
    setTimeout(() => {
      setShowModal(false);
    }, 1000); // Hide after 3 seconds
  }
  // const {ModalHandler , showModal , setShowModal} = useShoppingCart()
  console.log(showModal)

  // ------------------------------------------
  const [flag, setFlag] = useState(false);
  const flagHandler = ()=>{
    setFlag(!flag)
  }
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <div className={`w-full mt-6 relative ${open ? 'z-[-1]' : 'z-10'} z-[0] mx-auto mb-24`}>
        <div className='shadow-md '>
          {/* <Notification flag={flag}/> */}
          <ProductModal showModal={showModal}/>
        </div>
        <SearchBar />
        <div className='flex flex-wrap justify-center'>
          {products.map((item) => (
            <ProductCard key={item.id} width={width} prod={item} ModalHandler={ModalHandler} showModal={showModal} setShowModal={setShowModal} flagHandler={flagHandler} flag={flag}/>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;