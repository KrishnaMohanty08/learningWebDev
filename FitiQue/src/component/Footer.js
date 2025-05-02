import React, { Component } from 'react';
import './gym.css';

export default function Footer() {
    return (
        <>
            <div className='Footer footer-container'>

                <div className="footer-container">
                    <div>
                        <h5>Contact us</h5>
                        <p>91+ 123456781 <br/>91+ 0982-3456</p>
                        <p>Gmail:<br/>mohanfitiQue@gmail.com</p>
                    </div>
                    <hr className="mx-4 h-100 border-white" />
                    <div >
                        <h5>Info</h5>
                        <a href='https://www.planetfitness.com/newsroom' className="normal-text">Newpaper</a><br />
                        <a href='https://www.planetfitness.com/newsroom' className="normal-text">Careers</a><br />
                        <a href='https://www.planetfitness.com/newsroom' className="normal-text">FAQs</a><br />
                    </div>
                    <hr className="mx-4 h-100 border-white" />
                    <div >
                        <h5>Patners</h5>
                        <a href='https://www.planetfitness.com/franchising/become-a-franchisee' className="normal-text">Franchising</a><br />
                        <a href='https://www.planetfitness.com/franchising/become-a-franchisee' className="normal-text">PF Purpose</a><br />
                        <a href='https://www.planetfitness.com/franchising/become-a-franchisee' className="normal-text">Nework Media</a><br />
                    </div>
                    <span><hr className="mx-4 my-4 w-10" />
                    </span>
                    <div >
                        <h5>Legal</h5>
                        <a href='https://www.planetfitness.com/privacy-policy' className="normal-text">Privacy Policy</a>
                    </div>
                </div>


                <hr className="border border-secondary opacity-1" />
            </div>
        </>
    );
}
