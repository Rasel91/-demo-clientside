/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
      

      const product = useLoaderData();
      console.log(product)

      const handleUpdate = event => {

            // event.preventDefault();
            // const form = event.target;
            // const name = form.name.value;
            // const photo = form.photo.value;
            // const details = form.details.value;
            // console.log(name,photo,details)
          
            //   const productInfo = {name,photo,details}
            //   console.log(productInfo)

            // send data to client side to server side

        

      }
      return (
            <div>

                  {/* <h1>product {product.name}</h1>
                  <form onSubmit={handleUpdate} className='space-y-8 text-center ' >
                        <input type="text" name="name" placeholder='Name' id="" className='h-10 w-1/2 rounded-md' />
                        <br></br>
                        <input type="text" name="company" placeholder='Name of company' id="" className='h-10 w-1/2 rounded-md' />
                        <br></br>
                        <input type="text" name="photo" placeholder='Phot url' id="" className='h-10 w-1/2 rounded-md' />
                        <br></br>
                        <input type="text" name="details" placeholder='Details' id="" className='h-10 w-1/2 rounded-md' />
                        <br></br>
                        <input type="submit" value="Submit" className='bnt bg-teal-800 text-white rounded-md p-4' />
                  </form> */}
            </div>
      );
};

export default Update;