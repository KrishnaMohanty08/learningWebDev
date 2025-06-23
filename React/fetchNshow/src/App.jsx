import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';


function App() {
    const [cards, setCards] = useState([]);
    const [query,setQuery]=useState("");
    const [order,setOrder]=useState("asc");
    
    const fetchData = async () => {
        let a = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await a.json();
        setCards(data);
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const filtered=cards.filter((item)=>{
        const response=item.title.includes(query) || item.body.includes(query) || item.userId.toString().includes(query);
        return response;
    })
    
    const sorted=[...filtered].sort((a,b)=>{
        return order==='desc'?a.userId-b.userId:b.userId-a.userId;
    })
    const Ddata=filtered.length>0? sorted :(()=>{console.log("cards");return cards})();
    
    return (
        <>
            <Navbar />
            <form onSubmit={e => e.preventDefault()} className="flex items-center px-4 w-full max-w-lg bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-full p-1 shadow-lg">
                  <input
                    type="text"
                    className="flex-1 text-black text-sm p-2 outline-none placeholder-gray-400"
                    placeholder="Search stories that interest you..."
                    onChange={(e)=>setQuery(e.target.value)} 
                  />
                  <button  type="submit" className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                   send
                  </button>
                  <button type="submit" onClick={()=>{order==='asc'?setOrder("desc"):setOrder('asc');}} className='bg-red-300'> sort</button>
            </form>

            <div className="container">
                {Ddata.map((card) => (
                    <div className="card"  key={card.id}>
                        <div className="card-body">
                            <h1>{card.userId}</h1>
                            <h5 className="card-title">{card.title}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">User ID: {card.id}</h6>
                            <p className="card-text">{card.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
