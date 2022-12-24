import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from '../components/home/ProductCart/ProductCart';
import { getProducts } from '../features/productsSlice/ProductsSlics';

const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products.products);
  const { isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // let content;

  // if (isLoading) {
  //   content = (
  //     <div className=" flex justify-center w-full">
  //       <div
  //         className="radial-progress animate-spin"
  //         style={{ '--value': '80', '--size': '12rem', '--thickness': '2px' }}
  //       ></div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 grid-cols-2  gap-4 px-4 py-4">
        {products?.map((product) => (
          <ProductCart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
