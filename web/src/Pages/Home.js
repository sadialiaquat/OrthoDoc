import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FaUserMd } from "react-icons/fa";
//const auth = getAuth();
function Home() {
  const navigate = useNavigate();
  var Doctors = [];    
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "doctors")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("Usersss", doc.id, " => ", doc.data());
        const response = doc.data();
        Doctors.push(response);
        setData(prev => [...prev, response])
      }); console.log("Doctor's Array :", Doctors)
    });
  }, []);
  //console.log("Search results",data.filter(user=>user.email.includes("sadia")))
  return (<>
    <Sidebar>
      <div className="search-main">
        <div className="search-heading">Search for doctor</div>
        <div className="search">
          <input
            className="search__input"
            type="text"
            id="search"
            placeholder="Search for doctor here..."
            //onKeyUp={handleSubmit} 
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search__button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <ul className="search-results">
          {data.filter((user) =>
            user.displayName.toLowerCase().includes(query)
          ).map((user) => (
            <a onClick={() => navigate('/viewProfile', { state: { id: user.email } })}> <li className="fetch-doctor" key={user.displayName}>
             <FaUserMd style={{marginLeft:40,height:50, width:50,marginTop:30}}/> <div style={{marginLeft:170,position:"absolute",marginTop:-60}}> {user.email}</div> <br/> <div style={{marginLeft:170, marginTop:-10}}>{user.displayName} </div><div><FaAngleRight style={{marginLeft:790,height:40, position:"absolute", marginTop:-70}}/></div>
            </li></a> 

          ))}

        </ul>
      </div></Sidebar>
  </>
  )
}
export default Home