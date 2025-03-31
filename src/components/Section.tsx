'use client'
import { Context } from "@/contexts/Context";
import React, { useContext, useState } from "react";

const {state, dispach} = useContext(Context);
  const [carai, setCarai] = useState(state.user.index);
  
  const [option, setOption] = React.useState(state.user.index);


export const Section = () =>{
    return(
        <>
            
        </>
    )
}