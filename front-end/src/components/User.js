import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Users.css'

function Users(){
    let [User, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://inventory-backend-hal1.onrender.com/Users`, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((json) => {
            setUser(json)
            console.log(json);
        })
    }, [])

    function deleteSupplier(e) {
        const URL = `https://inventory-backend-hal1.onrender.com/${e.target.alt}`
        fetch(URL, {
            method: 'DELETE',
        })
        .then(window.location.href = '/Users')
    }

    return(
        <div className='User'>
            <div className='Header'>
                <div className='Name'><img src='https://cdn-user-icons.flaticon.com/96885/96885753/1679413474378.svg?token=exp=1679414375~hmac=6711997f218f020aa8895c37fe44ec4b' width='30' alt='' style={{ marginRight: "1rem" }} />Users</div>
                <Link to='/Register' className='Supplier'>
                    <div className='Add-Supplier-Button'>Registor<img src='https://cdn-icons-png.flaticon.com/512/1828/1828925.png' width="15" alt='' style={{ marginLeft: "10px", filter: "invert(100%)" }} /></div>
                </Link>
            </div>
            <div className='User-heading'>
                <div>No.</div>
                <div style={{ textAlign: "start" }}>Retailer Name</div>
                <div>Retailer Id</div>
                <div>Role</div>
                <div>Contact Number</div>
                <div>Actions</div>
            </div>
            <div className="User-list">
                {User.map((element, i) => (
                    <div className='User-column'>
                        <div>{i + 1}</div>
                        <div style={{ textAlign: "start" }}>{element.RetailerName}</div>
                        <div>{element.RetailerId}</div>
                        <div>{element.Role}</div>
                        <div>{element.ContactNumber}</div>
                        <div className='Action'>
                            <img src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt={`${element._id}`} width="20" onMouseOver={(e) => e.target.src = 'https://cdn-user-icons.flaticon.com/96885/96885753/1679326938798.svg?token=exp=1679327844~hmac=683d30cc114a5ff3c841cca8421d252f'} onMouseOut={(e) => e.target.src = 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'} onClick={deleteSupplier} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users