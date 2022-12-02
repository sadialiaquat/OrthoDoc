import React from 'react';
import Sidebar from "./Sidebar";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { db,authentication } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import {Link} from 'react-router-dom';




function ViewProfile() {
    const email = authentication.currentUser?.email;

    const navigate = useNavigate();
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
            <Sidebar>
                <div className="main-main">
                    <div className="search-heading">View Profile</div>
                    
                    {users.map((item, key) => (
                        item.address.map(
                            (itm, k) => (
                                <div className='view-main'>
                                   <div className='profile-v'> <FaUserCircle/></div>
                                   <p className='markk'> {item.displayName ?? item.name}</p>
                                    <p>Email address: {mail}</p>
                                    <p>Phone Number: {item.phoneNumber ?? item.contact}</p>
                                    <p>Street No: {itm[0].streetNumber}</p>
                                    <p>District: {itm[0].district}</p>
                                    <p>City: {itm[0].city}</p>
                                    <p>Region:{itm[0].region}</p>

                                    <button onClick={() => navigate('/message', { state: { docid: mail , userid:authentication.currentUser?.email ,current:"patient"} })} type="submit" className="c-button">
                                        Chat
                                    </button>
  <button type="submit" className="b-button" onClick={() => navigate('/appointment', { state: { id: mail, startTime: item.startTime, endTime: item.endTime, name:item.displayName ?? item.name } })}> 

                                    
                                        Book Appointment
                                    </button>
                                </div>


                            )
                        )
                    ))}

                </div>
            </Sidebar>

        </>

    )
}
export default ViewProfile; 