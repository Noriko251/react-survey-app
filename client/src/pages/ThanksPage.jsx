//ThanksPage.js

import Title from "../components/Title";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const TopPage = () => {
    return(
        <>
            <Title />
            <h2>ご協力いただきありがとうございました。</h2>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button variant="contained" color="success"><Link to="/">Top Page</Link></Button>
            </Box>
        </>
    );
};

export default TopPage;