import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Gym from './component/gym.js';
import Signup from './component/Signup.js';
import Footer from './component/Footer.js';
import Exercise from './component/Exercise.js';

function App() {
  const [exerciseList, setExerciseList] = useState([
    {
      name: "Push-ups",
      sets: "3/15",
      time: 5,
      helps_in: "A powerhouse exercise that not only strengthens your upper body but also enhances your posture, making you stand tall and confident.",
      image: "https://imgur.com/WB1zKVe.jpg"
    },
    {
      name: "Plank Hold",
      sets: "3/30",
      time: 4,
      helps_in: "The ultimate core stabilizer! This exercise not only fortifies your core but also acts as a shield against back pain, ensuring a strong and resilient back.",
      image:"https://imgur.com/WB1zKVe.jpg"
    },
    {
      name: "Squats",
      sets: "3/20",
      time: 6,
      helps_in: "The king of lower body workouts! Squats not only build strength but also improve your mobility, making everyday movements easier and more efficient.",
      image: "https://imgur.com/WB1zKVe.jpg"
    },
    {
      name: "Burpees",
      sets: "3/12",
      time: 7,
      helps_in: "A full-body workout that challenges your strength and endurance, burpees are perfect for those looking to push their limits and achieve a fitter physique.",
      image:"https://imgur.com/WB1zKVe.jpg"
    },
    {
      name: "Lunges",
      sets: "3/12",
      time: 6,
      helps_in: "A dynamic exercise that not only torches calories but also enhances your balance and coordination, making it a must for any fitness routine.",
      image:"https://imgur.com/WB1zKVe.jpg"
    },
    {
      name: "Mountain Climbers",
      sets: "3/20",
      time: 5,
      helps_in: "An exhilarating cardio blast that elevates your heart rate while strengthening your core, mountain climbers are a fun way to stay fit and active.",
      image:"https://imgur.com/WB1zKVe.jpg"
    }
  ]);
  const [priceList,setPricelist]=useState([
    {
      name: "Fitness Starter",
      price: 29.99,
      duration: 30,
      description: "Our Fitness Starter plan is perfect for those who are new to working out or looking to get back into shape. This plan includes a 30-minute daily workout routine that focuses on building a strong foundation in cardio and strength training.",
    },
    {
      name: "Fitness Pro",
      price: 49.99,
      duration: 45,
      Offer: 1,
      description: "Our Fitness Pro plan is designed for those who are looking to take their fitness to the next level. This plan includes a 45-minute daily workout routine that focuses on building strength, increasing endurance, and improving overall athleticism.",
    },
    {
      name: "Elite Fitness",
      price: 99.99,
      duration: 60,
      Offer : 2,
      description: "Our Elite Fitness plan is designed for those who are serious about achieving elite-level fitness. This plan includes a 60-minute daily workout routine that focuses on building extreme strength, endurance, and agility.",
    },
  ]);
  const [programList,setProgramList] =useState([
    {
      name :"21 Day Chellenge",
      Starting_date : "01 Jan 2025",
      Ending_date : "21 Jan 2025",
      Programtype: "Any",
      Discount :"5%",
      image: "https://imgur.com/WB1zKVe.jpg",
    },
    {
      name :"72 Day Chellenge",
      Starting_date : "01 Jan 2025 / 03 Mar 2025",
      Ending_date : "72 days",
      Programtype: "Any",
      Discount :"15%",
      image: "https://imgur.com/WB1zKVe.jpg",
    },
    {
      name :"YOGI Challenge",
      Starting_date : "01 Jan 2025",
      Ending_date : "31 Dec 2025",
      Programtype: "Fitness Pro or Elite Fitness",
      Discount :"25%",
      image: "https://imgur.com/WB1zKVe.jpg",
    }

  ])
  

  return (
    <>
      <Navbar />
      <Gym priceList={priceList} programList={programList} exerciseList={exerciseList}/>
      <Footer/>
    </>
  );
}

export default App;
