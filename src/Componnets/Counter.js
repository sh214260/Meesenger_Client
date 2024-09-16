import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
export default function Counter() {
    const dispath = useDispatch()
    const counter = useSelector((state) => state.counterSlice.counter)
    const token = useSelector((state) => state.userSlice.token)
    return (
        <div>
            {/* <h2>Counter: {counter}</h2>
            <h2>token:{token}</h2>
            <button onClick={()=>dispath(add1())}>add 1</button>
            <button onClick={()=>dispath(reduce1())}>reduce 1</button> */}
            <button onClick={() => dispath(logout())}></button>
        </div>)
}