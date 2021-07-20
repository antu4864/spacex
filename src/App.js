import React from "react";
import {useState} from "react";
import {useEffect } from 'react';
import logo from "./logo.png";

function App() {

        const [users, setUsers] = useState([])

        const getUsers= async()=>{
          const response = await fetch('https://api.spacexdata.com/v3/launches');
         setUsers(await response.json());

         
     
        }

        useEffect(()=>{
          getUsers();
        }, []);
  return (
   <>

<div className="main-h2">
         <img src={logo} alt="logo"/>
    </div>

      
     <div className="main">

     <table className="table">
    
           <thead>
             <tr>
             <th>S.No</th>
                <th>Launched(UTC)</th>
                <th>Location</th>
                <th>Mission</th>
                <th>Orbit</th>
                <th>Launch Status</th>
                <th>Rocket</th>
               
             </tr>
             </thead>


             {
               users.map((data) => {
                 return(
                   <>
                        
                      <tbody>
                          <tr>
                          <td>{data.flight_number}</td>
                            <td>{data.launch_date_utc}</td>
                            <td>{data.launch_site.site_name}</td>
                            <td>{data.mission_name}</td>
                            <td>{data.rocket.second_stage.payloads[0].orbit}</td>
                            <td>{data.upcoming}</td>
                            <td>{data.rocket.rocket_name}</td>

                          </tr>
                      </tbody>
                    
                   </>
                 )

               })
             }

           
      </table>

       </div>
  


   </>
  );
}

export default App;
