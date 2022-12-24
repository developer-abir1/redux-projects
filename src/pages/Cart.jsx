import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from '../components/home/ProductCart/ProductCart';
import { removeProduct } from '../features/cartSlice/CartSlice';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { GrUpdate } from 'react-icons/gr';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  let content;

  if (!cart.length) {
    content = (
      <div className="flex justify-center items-center">
        <h2 className="text-3xl font-bold">You Have no products </h2>
      </div>
    );
  }

  if (cart.length) {
    content = (
      <div className="grid grid-cols-3 ">
        <div className="  col-span-2 ml-4 my-4">
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>SR</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((pd, index) => (
                    <tr key={pd.id}>
                      <th>{index + 1}</th>
                      <td>{pd.title}</td>
                      <td>{pd.description}</td>
                      <td>
                        {' '}
                        <img src={pd.images[0]} alt="" className="w-8 h-7" />
                      </td>
                      <td>{pd.price}</td>
                      <td>
                        <button className="btn   bg-slate-500 border-0">
                          <GrUpdate size={20} color="green" />
                        </button>
                      </td>
                      <td>
                        {' '}
                        <button
                          className="btn   bg-slate-500 border-0"
                          onClick={() => dispatch(removeProduct(pd))}
                        >
                          <RiDeleteBin2Fill size={20} color="red" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center border-2">
          <h3 className="text-3xl">Total Price</h3>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Cart;
