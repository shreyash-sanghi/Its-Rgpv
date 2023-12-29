import axios from "axios";
import React from "react";
import { useState } from "react";

const Input = ()=>{
    const [initialfile,finalfile] = useState();
    
    const uplode =()=>{
        const formdata = new FormData();
        formdata.append('file',initialfile)
         try{
            console.log(formdata);
        axios.post(`${process.env.Server_Path}/uplode`,formdata)
         }catch(error){
            alert(error)
            console.log(error);
         }
    }
    return(
        <>
        <input type="file" onChange={(ev)=>{finalfile(ev.target.files[0])}}/>
        <button type="button" onClick={uplode}>Uplode</button>
        </>
    )
}
export default Input;