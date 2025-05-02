import React from 'react';
import './gym.css';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

export default function Gym(props) {

  const suffle = (exerciseList) => {
    const suffleList = [...exerciseList].sort(() => Math.random() - 0.5);
    return suffleList.slice(0, 1);
  }

  return (
    <div>

      <div className="features">

        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item ">
              <img src="https://imgur.com/5pghqoB.jpg" className="d-block w-100" alt="Track your Exercises using your Phone/Bands" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Boosts physical fitness and overall health.</h5>
                <p>"Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come."</p>
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://imgur.com/x2gKgm8.jpg" className="d-block w-100" alt="Get a personal trainer to help you with your workout" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Enhances mental well-being and reduces stress</h5>
                <p>"The pain you feel today will be the strength you feel tomorrow."</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://imgur.com/A4y2JP8.jpg" className="d-block w-100" alt="Compete with other users to see who can do the most reps" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Builds discipline, confidence, and social connections.</h5>
                <p>"Don't count the days, make the days count."</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="Workout-Programs">
        <h2>Workout Programs</h2>
        {props.programList.slice(0, 3).map((program, index) => {

          return (
            <div className="exercises p-2 " key={index}>
              <div className="row g-0 bg-body-secondary position-relative border border-primary">
                <div className="col-md-4 mb-md-0 p-md-2 rounded float-end">
                  <img
                    src={program.image}
                    className="img-fluid rounded float-end img-thumbnail h-10"
                    alt={program.name}
                  />
                </div>
                <div className="col-md-5 p-2 ">
                  <h3>{program.name}</h3>
                  <h6>Starting Date: {program.Starting_date}</h6>
                  <h6>Finished: {program.Ending_date}</h6>
                  <h6>The program type: {program.Programtype}</h6>
                  <h4 style={{color:"red"}}>Discount:{program.Discount}</h4>
                  <Link to="/exercises" className="btn btn-primary border">Join Now</Link>
                  
                </div>
              </div>
            </div>
          );

        })}
      </div>

      <div className="Workout-Memberships">
        <h2>Membership</h2>
        <div className="Pricing row" >
          {props.priceList.map((prices) => {
            return (
              <div className="Pricing-Container">
                <div className="p-2 col">
                  <h2 className="align-middle">{prices.name}</h2>
                  <h5>Price:${prices.price}</h5>
                  <h5>Offer:{prices.Offer}month</h5>
                  <h5>Duration:{prices.duration} min</h5>
                  <p>{prices.description}</p>
                  <button className="btn btn-primary m-1">Join Now</button>
                  <button className="btn btn-danger m-1">Renew Membership</button>
                  <p style={{ color: 'red', fontSize: '12px', alignItems: 'end' }}>*The offer is only for 6-month plan</p>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>

      <h2>Sweat Sesh</h2>
      <div className="Exercise row">

          {suffle(props.exerciseList.map((exercise, index) => {
            return (
              <div key={index} className="col">
                <div className="card  m-2" style={{ width: "18rem" }}>
                  <img src="https://imgur.com/WB1zKVe.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3>{exercise.name}</h3>
                    <p className="card-text">{exercise.helps_in}</p>
                    <Link to="/exercises" className="btn btn-primary">Read more..</Link>
                  </div>
                </div>

              </div>
            );
          }))}
          {suffle(props.exerciseList.map((exercise, index) => {
            return (
              <div key={index} className="col">
                <div className="card m-2 col" style={{ width: "18rem" }}>
                  <img src="https://imgur.com/WB1zKVe.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3>{exercise.name}</h3>
                    <p className="card-text">{exercise.helps_in}</p>
                    <Link to="/exercises" className="btn btn-primary">Read more..</Link>
                  </div>
                </div>

              </div>
            );
          }))}
          {suffle(props.exerciseList.map((exercise, index) => {
            return (
              <div key={index} className="col">
                <div className="card minor m-2 col" style={{ width: "18rem" }}>
                  <img src="https://imgur.com/WB1zKVe.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3>{exercise.name}</h3>
                    <p className="card-text">{exercise.helps_in}</p>
                    <Link to="/exercises" className="btn btn-primary">Read more..</Link>
                  </div>
                </div>

              </div>
            );
          }))}
      </div>

      <div className='QNA'>
        <div className="accordion accordion-flush" id="accordionFlushExample">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What are the gym's operating hours?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Our gym is open 24/7, Monday to Sunday. However, our staffed hours are from 8am to 8pm, Monday to Friday, and 9am to 6pm on weekends.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Do I need to sign a contract to join the gym?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">No, we offer flexible membership plans that do not require a contract. You can choose from month-to-month, 3-month, 6-month, or 12-month plans. You can cancel or change your plan at any time with 30 days' notice.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Can I try out the gym before committing to a membership?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Yes, we offer a free 7-day trial membership. This allows you to try out our facilities, classNamees, and equipment before deciding if our gym is right for you.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Can I bring a guest to the gym with me?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Yes, members can bring a guest to the gym with them for a fee of $10 per visit. Guests must sign a waiver and be accompanied by the member at all times. We also offer a free guest pass for new members to bring a friend or family member to try out the gym.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Do you offer personal training services?</button>

            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Yes, we have certified personal trainers on staff who can help you create a customized workout plan and provide one-on-one training sessions. You can purchase personal training sessions in packages or as a monthly add-on to your membership.</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}