import React from "react";

export function Form() {
    return(
        <form action="" className="px-6 text-blue-950 font-roboto-regular">
            <label htmlFor="" className="font-bold text-sm">Email address</label>
            <br />
            <input type="email" placeholder="email@company.com" className="w-full h-10 p-5 my-3 outline outline-slate-400 outline-1 rounded-md"/>
            <button type="submit" className="w-full h-10 mt-3 mb-6 bg-blue-950 rounded-md text-slate-200 font-semibold">Subscribe to monthly newsletter</button>
        </form>
    )
}