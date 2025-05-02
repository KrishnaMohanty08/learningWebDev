import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './component/Store';
import Exercise from './component/Exercise';
import Signup from './component/Signup'; 

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const exerciseList=[
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
  ];
const storeList=[
    {
      item_name: "Treadmill",
      rent_or_buy: "Buy",
      cost: 75000,
      quantity:0,
      image_url: "https://www.shutterstock.com/shutterstock/photos/2475252197/display_1500/stock-photo-a-fit-girl-dressed-in-a-black-sports-outfit-running-on-a-treadmill-at-the-gym-2475252197.jpg"
    },
    {
      item_name: "Dumbbell Set (20 kg)",
      rent_or_buy: "Buy",
      cost: 3000,
      quantity:0,
      image_url: "https://www.shutterstock.com/shutterstock/photos/2475252197/display_1500/stock-photo-a-fit-girl-dressed-in-a-black-sports-outfit-running-on-a-treadmill-at-the-gym-2475252197.jpg"
    },
    {
      item_name: "Yoga Mat",
      rent_or_buy: "Buy",
      cost: 500,
      quantity:0,
      image_url: "https://www.shutterstock.com/shutterstock/photos/2475252197/display_1500/stock-photo-a-fit-girl-dressed-in-a-black-sports-outfit-running-on-a-treadmill-at-the-gym-2475252197.jpg"
    },
    {
      item_name: "Elliptical Trainer",
      rent_or_buy: "Rent",
      cost: 1500,
      quantity:0,
      image_url: "https://www.shutterstock.com/shutterstock/photos/2475252197/display_1500/stock-photo-a-fit-girl-dressed-in-a-black-sports-outfit-running-on-a-treadmill-at-the-gym-2475252197.jpg"
    },
    {
      item_name: "Kettlebell (10 kg)",
      rent_or_buy: "Buy",
      cost: 2000,
      quantity:0,
      image_url: "https://www.shutterstock.com/shutterstock/photos/2475252197/display_1500/stock-photo-a-fit-girl-dressed-in-a-black-sports-outfit-running-on-a-treadmill-at-the-gym-2475252197.jpg"
    },
    {
      item_name: "Rowing Machine",
      rent_or_buy: "Rent",
      cost: 2500,
      quantity:0,
      image_url: "https://www.shutterstock.com/shutterstock/photos/2475252197/display_1500/stock-photo-a-fit-girl-dressed-in-a-black-sports-outfit-running-on-a-treadmill-at-the-gym-2475252197.jpg"
    },
    {
      item_name: "Resistance Bands Set",
      rent_or_buy: "Buy",
      cost: 1200,
      quantity:0,
      image_url: "https://www.shutterstock.com/shutterstock/photos/2475252197/display_1500/stock-photo-a-fit-girl-dressed-in-a-black-sports-outfit-running-on-a-treadmill-at-the-gym-2475252197.jpg"
    },
    {
      item_name: "Spin Bike",
      rent_or_buy: "Rent",
      cost: 1800,
      quantity:0,
      image_url: "https://www.shutterstock.com/shutterstock/photos/2475252197/display_1500/stock-photo-a-fit-girl-dressed-in-a-black-sports-outfit-running-on-a-treadmill-at-the-gym-2475252197.jpg"
    },
    {
      item_name: "Pull-Up Bar",
      rent_or_buy: "Buy",
      cost: 1500,
      quantity:0,
      image_url: "https://www.shutterstock.com/shutterstock/photos/2475252197/display_1500/stock-photo-a-fit-girl-dressed-in-a-black-sports-outfit-running-on-a-treadmill-at-the-gym-2475252197.jpg"
    }
  ];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/exercises",
    element: <Exercise exerciseList={exerciseList}/>
  },
  {
    path: "/signup", 
    element: <Signup />
  },
  {
    path:"/store",
    element:<Store storeList={storeList}/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

