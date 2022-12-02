import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AdminSidebar from './AdminSidebar';
import { useState , useEffect } from "react";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
function AdminViewPatient () {
  const navigate = useNavigate();
    var Users=[];
    const [data, setData] = useState([]);
    //const [email, setEmail]=useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
      const querySnapshot = getDocs(collection(db, "users")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("Usersss",doc.id, " => ", doc.data());
          const response = doc.data();
          //const email=doc.data().email;
          Users.push(response);
         // setEmail(prev=>[...prev,email])
          setData(prev=>[...prev,response])
          // setPatient(Users);
          // Alert.alert("LoggedIn as Doctor");
          // setDoc("False");
          //console.log("SEARCH RESULTS==="+Doctors)
      });console.log("Users's Array :",Users)   
      }); 
  }, []);


    return (<>
    <AdminSidebar>
    <div className="search-main">
      <div className="search-heading">View patients</div> 
          
            <ul className="view-results">
          {data.map((user) => (
            <a onClick={() => navigate('/admin/viewPatientProfile', { state: { id: user.email } })}> <li className="fetchh-doctor" key={user.displayName}>
              {user.email}<br />{user.displayName}  <div><button className='adminhome-button'type='submit'><h5 className='Upload'>View</h5></button></div>
            </li></a>

          ))}

        </ul>
        </div></AdminSidebar>
            </>
    )
    }
export default AdminViewPatient