import React, { useState, useEffect } from "react";
import "./App.css";
import UsersList from "./component/UsersList";
import Team from "./component/Team";
import Pagination from "./component/Pagination";
import data from "./data.json";

function App() {

 
  let [users, setUsers] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [domainFilter, setDomainFilter] = useState("");
  let [genderFilter, setGenderFilter] = useState("");
  let [availabilityFilter, setAvailabilityFilter] = useState("");
  let [currentPage, setCurrentPage] = useState(1);
  let [usersPerPage] = useState(20);
  let [team, setTeam] = useState([]);
 
  useEffect(() => {
    setUsers(data);
   
  }, []);

  
  const searchByName = (e) => { setSearchTerm(e.target.value) };

  const filterUsers = () => {
    
    let filteredUsers = users;

    if ( searchTerm !== "") {
      filteredUsers = users.filter((user) =>
      ( (user.first_name + " " + user.last_name).toLowerCase().includes(searchTerm.toLowerCase()) || user.first_name.toLowerCase() == searchTerm.toLowerCase() )
    );
    }

    if (domainFilter !== "") {
      filteredUsers = filteredUsers.filter(
        (user) => user.domain.toLowerCase() === domainFilter.toLowerCase()
      );
    }

    if (genderFilter !== "") {
      filteredUsers = filteredUsers.filter(
        (user) => user.gender === genderFilter
      );
    }

    if (availabilityFilter !== "") {
      filteredUsers = filteredUsers.filter(
        (user) => String(user.available) == availabilityFilter
      );
    }

   
    return filteredUsers;
  };

  const addToTeam = ( user ) => {   
  
    const check = team.filter ( ( e ) => e.id == user.id )     // Check user lready exist or not

    if ( check.length == 0  ) setTeam ( [...team , user] ) 

    else alert("User Already Exist")
  }

  const removeFromTeam = (member) => { setTeam ( team.filter ( (user) => user.id !== member.id ) ) }

  const paginate = (pageNumber) => { setCurrentPage(pageNumber) };

  //After Filter
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = filterUsers().filter( (e) => {
   //console.log(e.id)
   return ( Number(e.id) >= indexOfFirstUser && Number(e.id) < indexOfLastUser) 
  }
  )  
 
//  console.log(filterUsers())
 console.log(currentUsers , indexOfFirstUser , indexOfLastUser , currentPage)

  return (
    <div className="App">
      <h1>Users List</h1>
      <div className="filters">
        <input type="text" placeholder="Search by Name" onChange={searchByName} />

        <select onChange={(e) => setDomainFilter(e.target.value !== "" ? e.target.value : "") } >
          <option value="">All Domains</option>
          <option value="UI Designing">UI Designing</option>
          <option value="Business Development">Business Development</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
        </select>

        <select onChange={(e) => setGenderFilter(e.target.value !== "" ? e.target.value : "") }>
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select onChange={(e) => setAvailabilityFilter( e.target.value !== "" ? e.target.value : "" ) } >
          <option value="">All Availabilities</option>
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
      </div>

      <UsersList users={currentUsers} addToTeam={addToTeam} />
     
<Pagination usersPerPage={usersPerPage} totalUsers={filterUsers().length} paginate={paginate}  currentPage={currentPage}  />


        <Team team={team} removeFromTeam={removeFromTeam} />
     
      </div>
);
}

export default App;