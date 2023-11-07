import React, { useContext } from 'react'
import { Header } from './header';
import { appProvider } from './appProvider';

const Home = () => {

    const { userdetail } = useContext(appProvider);
    console.log(userdetail?.username)
    console.log(userdetail?.password)

    const editdetails = () =>{
       alert("edit clicked !!")
    }

    return (
        <div>
            <Header></Header>
            {/* <h1>Username : {userdetail?.username}</h1> */}
            <input placeholder='username' value={userdetail?.username} disabled></input><br/>
            {/* <p>Password : {userdetail?.password}</p> */}
            <input placeholder='password' value={userdetail?.password} disabled></input><br/>
            {/* <p>contact number : {userdetail?.contactnumber}</p> */}
            <input placeholder='contact number' value={userdetail?.contactnumber} disabled></input><br/>
            {/* <button onClick={()=>(editdetails())}>Edit</button> */}
        </div>
    )
}


export default Home;