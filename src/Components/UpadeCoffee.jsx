import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpadeCoffee = props => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updateCoffee)
        // add to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
        form.reset();

    }
    return (
        <div className='bg-[#F4F3F0]  '>
            <div className='text-center my-8'>
                <h2 className='text-4xl font-bold '>Update Coffee</h2>
                <p className='w-2/3 mx-auto mt-4'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here..</p>
            </div>
            <form onSubmit={handleUpdateCoffee} className='max-w-4xl mx-auto'>
                {/* name row */}

                <div className='md:flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Name</span>
                            </div>
                            <input type="text" name='name' defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Available Quantity</span>
                            </div>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter Available Quantity" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* Supply row */}

                <div className='md:flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Supplier</span>
                            </div>
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Taste</span>
                            </div>
                            <input type="text" name='taste' defaultValue={taste} placeholder="Enter Coffee Taste" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* Category row */}

                <div className='md:flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Category</span>
                            </div>
                            <input type="text" name='category' defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Details</span>
                            </div>
                            <input type="text" name='details' defaultValue={details} placeholder="Enter Coffee Details" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className=''>
                    <label className="form-control">
                        <div className="label">
                            <span className="">Photo</span>
                        </div>
                        <input type="text" name='photo' defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" value="Update Coffee" className='bg-[#D2B48C] w-full rounded-lg p-2 my-6 text-xl font-semibold' />

            </form>
        </div>
    );
};

UpadeCoffee.propTypes = {

};

export default UpadeCoffee;