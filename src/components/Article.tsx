import React from "react";

export function Article() {
    return (
        <article className="px-6 pt-6 text-indigo-950">
           <h1 className="font-roboto-bold font-extrabold text-3xl">Stay updated!</h1> 
           <p className="font-roboto-regular my-4">Join 60,000+ product managers receiving monthly updates on:</p>
           <ul>
            <li className="grid grid-cols-[1fr,8fr] my-2"><img src="assets/images/icon-list.svg" className="mr-3"></img>Product discovery and building what matters</li>
            <li className="grid grid-cols-[1fr,8fr] my-2"><img src="assets/images/icon-list.svg"></img>Measuring to ensure updates are a success</li>
            <li className="grid grid-cols-[1fr,8fr] my-2"><img src="assets/images/icon-list.svg"></img>And much more!</li>
           </ul>
        </article>
    )
}