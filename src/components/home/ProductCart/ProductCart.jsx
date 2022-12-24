import React from 'react';
import { AiFillStar, AiFillMinusSquare } from 'react-icons/ai';
import { BsPlusSquareFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  addToCart,
  removeProduct,
  removeQty,
} from '../../../features/cartSlice/CartSlice';

const ProductCart = ({ product }) => {
  const { title, price, description, images, rating, qty } = product;
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  return (
    <div className="card   bg-base-100 shadow-xl   relative  ">
      <figure className="px-10 pt-10">
        <img src={images[0]} alt={title} className="rounded-xl   " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p> {description}</p>
        <div className="card-actions">
          <h3 className="text-2xl">$ {price} </h3>
        </div>

        <div className="flex  justify-between items-center ">
          {rating}
          <AiFillStar size={20} color="green" />
        </div>
        {!pathname.includes('cart') && (
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              Buy Now
            </button>
          </div>
        )}
        <div className="flex justify-between space-x-4">
          {pathname.includes('cart') && (
            <div className="card-actions">
              <button
                className=" btn   bg-slate-500 border-0"
                onClick={() => dispatch(addToCart(product))}
              >
                <BsPlusSquareFill size={20} color="#fff" />
              </button>
            </div>
          )}
          {pathname.includes('cart') && (
            <div className="card-actions">
              <button className="btn   bg-slate-500 border-0">
                <AiFillMinusSquare
                  size={20}
                  color="white"
                  onClick={() => dispatch(removeQty(product))}
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className=" absolute  flex items-center justify-center top-0 right-0 bg-blue-500 w-8 rounded-full">
        <span className="text-2xl text-white">{qty}</span>
      </div>
    </div>
  );
};

export default ProductCart;
