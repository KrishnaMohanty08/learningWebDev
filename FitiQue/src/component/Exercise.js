import React from 'react'
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import './gym.css'
import Footer from './Footer'


function Exercise(props) {
    return (
        <>
            <Navbar />
            <div className="exercise-block">
                <h3>Exercises</h3>
                <div className="row mb-2">
                {props.exerciseList.map((exercise) => {
                    return (
                            <div className="card card-custom" style={{ width: "18rem" }}>
                            <div class="card-body mb-4">
                                <img
                                    src={exercise.image}
                                    className="img-fluid rounded float-end"
                                    alt={exercise.name}
                                />
                                <h3 class="card-title">{exercise.name}</h3>
                                <h5 class="card-text">Sets:{exercise.sets}</h5>
                                <h5 class="card-text">Duration:{exercise.time}</h5>
                                <p class="card-text">{exercise.helps_in}</p>
                            </div>
                            <span className='p-3'></span>
                        </div>

                    );
                })}
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Exercise
