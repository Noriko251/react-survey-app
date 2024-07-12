//TeacherPage.js

import React, { useState } from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import env from "dotenv";

const TeacherPage = () => {
    const [signin, setSignin] = useState({
        username: "",
        password: "",
    });

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignin({
        ...signin,
        [name]: value
    });
}; 

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            if (signin.username === process.env.SIGNIN_USERNAME && signin.password === process.env.SIGNIN_PASSWORD) {
                window.location = "/review";
            } else {
                alert("Wrong username or password.")
            }
            
        } catch(err) {
            console.error(err.message);
        }
    };
    return(
        <>
        <Title/>
        <h3 className="teachersPageTitle">講師専用ページ</h3>
        <form onSubmit={onSubmitForm}>
        <div className="username">
            <label htmlFor="username">User Name:
                <input type="text" id="username" name="username" onChange={handleInputChange}></input>
            </label>
        </div>
        <div className="password">
            <label htmlFor="password">Password:
                <input type="password" id="pass" name="password" onChange={handleInputChange}></input>
            </label>
        </div>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button type="submit" variant="contained" color="success">Sign in</Button>
        </Box>
        </form>
        <Footer />
        </>
    );
};

export default TeacherPage;