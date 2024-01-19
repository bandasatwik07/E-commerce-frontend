import { useEffect } from "react";
import { signOutAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";

function Logout(){
    const dispatch =useDispatch();
    const user= useSelector(selectLoggedInUser)
    useEffect(()=>{
        dispatch(signOutAsync());
    })
    return (
        <>
        {!user && <Navigate to='/login' replace={true}></Navigate>}
        </>
    );
}
export default Logout;