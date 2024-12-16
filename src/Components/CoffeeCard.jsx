import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    // delete
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('confirmed delete')
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="md:flex w-full justify-between p-4">
                <div>
                    <h2 className="card-title">name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier {supplier}</p>
                    <p>Taste {taste}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical gap-4">
                        <button className="btn join-item">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {

};

export default CoffeeCard;