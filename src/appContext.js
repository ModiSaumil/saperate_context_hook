import React, { useState } from 'react'
import { appProvider } from './appProvider';

const AppContext = (props) => {

    const data = {
        username: "",
        password: "",
        contactnumber: ""
    }

    const [userdata, setuserdata] = useState(data)

    const onchangeuser = (data) => {
        setuserdata(data)
    }

    return (
        <appProvider.Provider value={{
            userdetail: userdata,
            changeuserdetail: onchangeuser
        }}>
            {props.children}
        </appProvider.Provider>
    )
}

export default AppContext;
