import React from "react";
import { useNavigate } from "react-router-dom";

import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../../utils/APIRoutes";
import { Button,Box} from "@mui/material"

export default function Logout() {

  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <Box >
       <Button style={{  width:"10%", padding: "0.3rem", borderRadius: "0.5rem", backgroundColor: "#9a86f3", border: "none", cursor: "pointer" }} onClick={handleClick}>
        <BiPowerOff style={{ fontSize: "1.6rem", color: "#ebe7ff" }} />
      </Button>
    </Box>
      
     
  );
}

// const Button2 = styled(Button3 )`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0.5rem;
//   border-radius: 0.5rem;
//   background-color: #9a86f3;
//   border: none;
//   cursor: pointer;
// svg {
//     font-size: 1.6rem;
//     color: #ebe7ff;
//   }
// `;