import { useEffect, useState } from 'react'
import axios from 'axios';

export default function DataFetching() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
          const response = await axios.get('https://dummyjson.com/products');
          setProducts(response.data.products);
      };
  
      fetchProducts();
    }, []);
  
    console.log(products);

    return {products}
}
