import React, { useContext, useState } from "react";
// import { appProvider } from "./appProvider"; "../context/appProvider";
import { appProvider } from "./appProvider";
import { Header } from "./header";
import { useNavigate } from "react-router-dom";
const User = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState()

    const { changeuserdetail } = useContext(appProvider);

    const submitUserdata = () => {
        console.log("userdata : ", userData)
        changeuserdetail(userData);
        navigate('/')
    }

    return (
        <div>
            <Header></Header>
            <center>
                <div>
                    <label>
                        Username
                    </label>
                    <input type="text" placeholder="Username" onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} value={userData?.username} />
                </div>
                <div>
                    <label>
                        Password
                    </label>
                    <input type="text" placeholder="password" onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} value={userData?.password} />
                </div>
                <div>
                    <label>
                        contact number
                    </label>
                    <input type="number" placeholder="contact number" onChange={(e) => { setUserData({ ...userData, contactnumber: e.target.value }) }} value={userData?.contactnumber} />
                </div>
                <button type="button" onClick={() => { submitUserdata() }}>
                    Submit
                </button>

            </center>
        </div>
    )
}

export default User;