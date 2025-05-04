"use client"
// import Image from "next/image";

// export default function Home() {
//     const handleClick = async () => {
//         let data ={
//             name:"harry",
//             role:"coder"
//         }
//         let a = await fetch("/api/add", {
//             method: "POST", headers: {
//                 "Content-Type": "appication/json",
//             }, body: JSON.stringify(data),
//         })
//         let res = await a.json()
//         console.log(res)
//     }
//     return (
//         <div>
//             <h1 className="text-xl font-bols">Next.js Api routes demo</h1>
//             <button onClick={handleClick}>click me</button>
//         </div>
//     );
// }
export default function Home1(){
    return(
        <div className="m-4 mx-auto p-2">
            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" className="text-white" type="text"/>
                </div>
                <div>
                    <label htmlFor="add">Address</label>
                    <input name="name" id="name" className="text-white" type="text"/>
                </div>
                <div>
                <button>Submit</button>
                </div>
                    
            </form>
        </div>
    )
}