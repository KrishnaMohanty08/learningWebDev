import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from './gym';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [code, setCode] = useState('');
    const [isSignup, setPage] = useState(true);
    const [submit,setSubmit] =useState(false);

    const toggle = () => {
        return setPage(!isSignup);
    }

    const handleSubmit=()=>{
        alert("Thankyou for joining us again!!");
    }
    useEffect((submit) => {
        alert("Thankyou for joining us again!!")
      }, [submit]);
    return (
        <>

            <div className="signup position-relative">
                <button className="btn btn-primary position-absolute top-10 start-50 translate-middle" onClick={toggle}>Signup</button>
                {isSignup ? (
                    <div className="card">

                        <form >
                            <div className="Personal-info">
                                <ul>
                                    Name: <input className="text-box" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </ul>
                                <ul>
                                    Email: <input className="text-box" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </ul>
                                <ul>
                                    Phone number: <input className="text-box" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </ul>
                                <ul>
                                    Date of filling: <input type="date" />
                                </ul>
                                <ul>
                                    Date of birth: <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                                </ul>
                                <ul>
                                    Code ID: <input type="number" value={code} onChange={(e) => setCode(e.target.value)} />
                                </ul>
                                <ul>
                                    Gender:
                                    <input type="radio" id="male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" id="female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                                    <label htmlFor="female">Female</label>
                                    <input type="radio" id="other" name="gender" value="Other" onChange={(e) => setGender(e.target.value)} />
                                    <label htmlFor="other">Others</label>
                                </ul>
                            </div>

                            <button className="submit btn btn-danger" type="submit">Submit</button>
                        </form>
                    </div>
                ) : (
                    <div className="login">
                        <button className="btn btn-success" onClick={toggle}>Login</button>
                        <div className="card professional-info">
                            <form>
                                <ul>
                                    Name:<input className='text-boxt' type="text" value={name} />
                                </ul>
                                <ul>
                                    Email: <input className="text-box" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </ul>
                                <ul>
                                    Code ID: <input type="number" value={code} onChange={(e) => setCode(e.target.value)} />
                                </ul>
                                <button className="submit btn btn-danger" type="submit" onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
