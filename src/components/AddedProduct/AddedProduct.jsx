/* eslint-disable no-unused-vars */
import React from 'react';

const AddedProduct = () => {
      const handlesubmit = event => {

            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const details = form.details.value;
            console.log(name,photo,details)
          
              const prodcutInfo = {name,photo,details}

            // send data to client side to server side

            fetch(`http://localhost:5000/product`,{
                  method: "POST",
                  headers:{
                        "Content-Type":"application/json"
                  },
                  body:JSON.stringify(prodcutInfo)
            })
            .then(res => res.json())
            .then(data => {
                  console.log(data)
                  if(data.insertedId){
                        alert('Product added successfully')
                  }
            })

      }

      return (
            <div className='text-center bg-slate-400 max-w-screen-sm mx-auto mt-9 rounded-md'>

                  <form onSubmit={handlesubmit} className='space-y-8 text-center ' >
                        <input type="text" name="name" placeholder='Name' id="" className='h-10 w-1/2 rounded-md' />
                        <br></br>
                        <input type="text" name="company" placeholder='Name of company' id=""  className='h-10 w-1/2 rounded-md'/>
                        <br></br>
                        <input type="text" name="photo" placeholder='Phot url' id="" className='h-10 w-1/2 rounded-md' />
                        <br></br>
                        <input type="text" name="details" placeholder='Details' id="" className='h-10 w-1/2 rounded-md' />
                        <br></br>
                        <input type="submit" value="Submit" className='bnt bg-teal-800 text-white rounded-md p-4'  />
                  </form>
            </div>
      );
};

export default AddedProduct;