import React from 'react'
import './gym.css';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary navBar">
                    <div className="container-fluid navBar">
                        <a className="navbar-brand" href="/">FitiQue</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation ">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="http://localhost:3000/"> Home </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"  aria-expanded="false " >Workout Programs</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">21 Day Challenge</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">75 Day Challenge</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">YOGI Challenge</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"  aria-expanded="false " >Custom Workout</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">Diet</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Treking Plans</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Running</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Swimming</a>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/exercises" >Workout</Link> 
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/store"> Store </Link>
                                </li>
                            </ul>
                            <Link to="/signup" className="btn btn-primary">Signup</Link>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                            
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
export default Navbar;