import React from 'react';
import AdminSidebar from "./AdminSidebar";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { FaUserCircle } from "react-icons/fa";

function ViewProfileOfDoctor() {
    const location = useLocation();
    const [users, setUsers] = useState([]);
    const [mail, setMail] = useState(location.state.id);
   
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "doctors"));
            querySnapshot.forEach((doc) => {
                if (mail === doc.data().email) {
                    setUsers((prev) => [...prev, doc.data()]);
                }
            });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <AdminSidebar>
                <div className="main-main">
                    <div className="search-heading">View Doctor Profile</div>
                   
                    {users.map((item, key) => (
                        item.address.map(
                            (itm, k) => (
                                <div className='view-main-a'>
                                      <div className='profile-v'> <FaUserCircle/></div>
                                    <p className='markk'> {item.displayName ?? item.name}</p>
                                    <p>Email address: {mail}</p>
                                    <p>Phone Number: {item.phoneNumber ?? item.contact}</p>
                                    <p>Street No: {itm[0].streetNumber}</p>
                                    <p>District: {itm[0].district}</p>
                                    <p>City: {itm[0].city}</p>
                                    <p>Region:{itm[0].region}</p>
 
                                  
                                </div>


                            )
                        )
                    ))}

                </div>
            </AdminSidebar>

        </>

    )
}
export default ViewProfileOfDoctor; 