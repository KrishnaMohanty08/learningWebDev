export default function Home1(){
    const submitAction=e=>{
        "use server"
        console.log(e.get("name"),e.get("add"))
        fs.writeFile("hey i m good");
    }
    return(
        <div className="m-4 mx-auto p-2">
            <form action={submitAction}>
                <div className="p-4 bg-red-500">
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" className="my-4 text-white" type="text"/>
                </div>
                <div>
                    <label htmlFor="add">Address</label>
                    <input name="name" id="name" className="text-white my-4" type="text" placeholder="krishna"/>
                </div>
                <div>
                <button className="border-3 border-red pointer">Submit</button>
                </div>
                    
            </form>
        </div>
    )
}