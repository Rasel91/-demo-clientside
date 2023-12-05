/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
      const loadProducts = useLoaderData();

      const [products, setProducts] = useState(loadProducts);

      const handleDelete = _id => {

            console.log('product', _id)

            fetch(`http://localhost:5000/product/${_id}`, {

                  method: 'DELETE'

            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);

                        // it's use for the the form reset 
                        if (data.deletedCount > 0) {
                              alert('deleted successfully');
                              const remaining = products.filter(product => product._id !== _id);
                              setProducts(remaining);
                        }

                  })

      };

      return (
            <div className='text-center'>
                  <h1> product:{products.length}</h1>
                  <div className='space-y-3'>
                        {
                              products.map(product =>
                                    <p key={product._id}>
                                          {product.name}:
                                          {product.details} <button onClick={() => handleDelete(product._id)} className='btn'>X</button> </p>

                              )
                        }
                  </div>
            </div>
      );
};

export default Product;