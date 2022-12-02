import React from 'react';
import {  useEffect, useState } from "react";

import AdminSidebar from './AdminSidebar';
// import { useLocation } from 'react-router-dom';
import { db,authentication } from '../firebase-config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ViewAppointmentsByAdmin(){
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    get();
  }, [])

  async function getAppointments(){
    const list =[];
    const docRef = await getDocs(query(collection(db, 'appointments'),where('status', '==', `active`)));
      docRef.forEach((each)=>{
        list.push( {id:each.id, ...each.data()});
      })
      setAppointments(list);
      console.log("Arr",appointments);
      return list;
  };

  async function get(){
    const selectedAppointments = await getAppointments();
  }


   
return( <>
 <AdminSidebar>
    <div className="main-main">
      <div className="search-heading">View Appointments</div>   
      
      {
         appointments.map((slot)=>
         <p>{slot.doctorId}, {slot.status}  ,{slot.timeSlot}, { new Date(slot.date.seconds*1000).toDateString()  } </p>


         )

      }
             </div></AdminSidebar>
    </>
)

}
export default ViewAppointmentsByAdmin;