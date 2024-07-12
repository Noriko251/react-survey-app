//TopPage.js
import React from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


const TopPage = () => {
    return(
        <>
            <Title />
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button variant="contained" color="success" sx={{m:3}}><Link to="/student" sx={{color:"#FFFFFF"}}>Students</Link></Button>
            <Button variant="contained" color="success" sx={{m:3}}><Link to="/teacher" sx={{color:"#FFFFFF"}}>Teachers</Link></Button>
            </Box>
            <Footer />
        </>
    );
};

export default TopPage;