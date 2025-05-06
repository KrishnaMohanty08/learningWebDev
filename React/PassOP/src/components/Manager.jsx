import React from 'react'
import { useRef, useState, useEffect } from 'react'


const Manager = () => {

    const refEye = useRef()
    const refPassword = useRef()

    const [passwordArray, setPasswordArray] = useState([])
    const [form, setForm] = useState({ url: "", username: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {

        let passwords = localStorage.getItem('passwords');
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])

    const deletePassword =(e)=>{
        setPasswordArray(passwordArray.filter(password=>{
            passwordArray.url!==e}))
            localStorage.setItem('passwords',JSON.stringify(passwordArray.filter(password => password.url !== e)
        ));
    };
    

    const savePassword = () => {
        //console.log(form)
        setPasswordArray({ ...passwordArray, form })
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, form]))
        console.log(...passwordArray)
    }


    const hidePassword = () => {
        // console.log(refEye.current.src +" " + refPassword.current.type)
        if (refEye.current.src.includes('/src/components/icons/eye.png')) {
            refEye.current.src = '/src/components/icons/invisible.png'
            refPassword.current.type = 'text'
        } else {
            refEye.current.src = '/src/components/icons/eye.png'
            refPassword.current.type = "password"
        }
    }
    return (
        <>
            {/*background style */}
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            {/* logo */}
            <div className="flex flex-col items-center my-4">
                <div className="font-bold flex items-center justify-center">
                    <span className="text-red-600 text-lg">&lt;</span>
                    <span className="text-green-500 text-lg mx-1">
                        Pass<span className="text-white">OP</span>
                    </span>
                    <span className="text-red-600 text-lg">/&gt;</span>
                </div>
                <p className="text-white mt-2 text-center">Your Own Password Manager</p>
            </div>

            {/* manager div */}
            <div>
                <div className="my-4  flex items-center justify-center bg-black">
                    <div className="container bg-green-600 w-fit rounded-lg px-4 py-1">
                        <input
                            name="url"
                            value={form.url}
                            onChange={handleChange}
                            className="bg-gray-300 m-4 px-2 py-1 w-110 rounded"
                            type="text"
                            placeholder="Enter website URL"
                        />
                        <div className="flex  gap-6 m-3 py-1  rounded">
                            <input
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                className="flex bg-gray-300 w-2/3 px-2 rounded"
                                type="text"
                                placeholder="Enter Username"
                            />
                            <div className='relative flex bg-gray-300 w-1/3 rounded '>
                                <input ref={refPassword}
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className=" px-2 "
                                    type="password"
                                    placeholder="Enter Password"
                                />
                                <span className='absolute right-[2px]'>
                                    <img ref={refEye} src='/src/components/icons/eye.png' className='p-1 w-7 cursor-pointer' onClick={hidePassword} />
                                </span>

                            </div>

                        </div>
                        <div className="flex justify-center items-center py-2 rounded-full">
                            <button onClick={savePassword} className="flex px-2 justify-center items-center bg-gray-300 w-fit rounded">

                                <lord-icon
                                    className="w-8 h-8"
                                    src="https://cdn.lordicon.com/efxgwrkc.json"
                                    trigger="hover"
                                ></lord-icon>
                                Submit
                            </button>
                        </div>
                        <hr className="my-3 border-t border-black" />
                        <span className='flex mx-50 font-bold text-lg'>Saved Passwords</span>
                        {passwordArray.length === 0 && <div> Nothing to Show</div>}
                        {passwordArray.length !== 0 &&
                            <div>
                                <table className="table-auto bg-white rounded w-full py23 ">
                                    <thead className='bg-red-100 rounded'>
                                        <tr >
                                            <th className='text-center min-w-40 px-2   text-red-400'>Website URL</th>
                                            <th className='text-center  text-red-400'>Username</th>
                                            <th className='text-center  text-red-400'>Password</th>
                                        </tr>
                                    </thead>

                                    <tbody >
                                        {passwordArray.map((passwords) => {
                                            return (
                                                <tr >
                                                    <td className="relative py-1 hover:text-blue-500 min-w-40 px-2 text-center ">
                                                        <button className='' onClick={()=>deletePassword(passwords.url)}>
                                                        <lord-icon className=" absolute left-[4px]"
                                                            src="https://cdn.lordicon.com/vgpkjbvw.json"
                                                            trigger="hover"
                                                            style={{ width: "15px", height: "15px" }}>
                                                        </lord-icon>
                                                        <a href={passwords.url} target=''>{passwords.url}</a>
                                                        </button>
                                                    </td>
                                                    <td className="py-1 text-center">{passwords.username}</td>
                                                    <td className="py-1 text-center ">
                                                        {passwords.password}
                                                        <button
                                                            className="relative px-2 cursor-pointer"
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(passwords.password);
                                                                alert("Copied to clipboard");
                                                            }}
                                                            title="Copy password"
                                                        >
                                                            <lord-icon
                                                                className=""
                                                                src="https://cdn.lordicon.com/xuoapdes.json"
                                                                trigger="hover"
                                                                style={{ width: "15px", height: "15px" }}
                                                            ></lord-icon>
                                                        </button>

                                                    </td>

                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Manager
