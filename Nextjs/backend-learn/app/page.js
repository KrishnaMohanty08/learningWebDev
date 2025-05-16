"use client"

export default function Home() {
  const handleClick=async()=>{
    let data={
      name:"harry",
      role:"coder"
    }

    let a = await fetch("/api",{method:"POST",headers:{"Content-Type":"application/json",},
      body:JSON.stringify(data),
      })
    let res =await a.json()
    console.log(res)
  }
  return (
    <div>
      <h1>demo routes</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
