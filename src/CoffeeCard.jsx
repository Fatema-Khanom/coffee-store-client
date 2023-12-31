import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    const {_id,name,quantity,supplier,taste,category,details,photo}=coffee;
    const handleDelete = _id=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        <div className="card card-side  shadow-xl bg-[#F4F3F0]">
        <figure><img src={photo} alt="Movie" /></figure>
        <div className="flex justify-between w-full pr-4">
            <div className='pt-10'>
                <h2 className="card-title">Name: {name}</h2>
                <p>{quantity}</p>
                <p>{supplier}</p>
                <p>{taste}</p>
            </div>
            <div className="card-actions justify-end">
                <div className="btn-group btn-group-vertical space-y-4">
                    <button className="btn">View</button>
                    {/* <Link to={`updateCoffee/${_id}`}> */}
                    <button className="btn">Edit</button>
                    {/* </Link> */}
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-red-500 ">X</button>
                </div>
            </div>
        </div>
    </div>
        
    );
};

export default CoffeeCard;