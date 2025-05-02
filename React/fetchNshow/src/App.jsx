import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    const [cards, setCards] = useState([]);

    const fetchData = async () => {
        let a = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await a.json();
        setCards(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                {cards.sort(cards.userId).filter((card)=>{
                    return card.body.toString().length<120
                }).map((card) => (
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
