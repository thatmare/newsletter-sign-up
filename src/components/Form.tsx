import React from "react";

export function Form() {
    return(
        <form action="">
            <label htmlFor="">Email address
                <input type="email" placeholder="email@company.com"/>
            </label>
            <button type="submit">Subscribe to monthly newsletter</button>
        </form>
    )
}