import React, { useRef, useState, useEffect } from 'react';

const Manager = () => {
  const refEye = useRef();
  const refPassword = useRef();

  const [passwordArray, setPasswordArray] = useState([]);
  const [form, setForm] = useState({ url: "", username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fetch all passwords from backend
  const getPassword = async () => {
    let req = await fetch('http://localhost:3000/');
    let passwords = await req.json();
    if (Array.isArray(passwords)) {
      setPasswordArray(passwords);
    }
  };

  useEffect(() => {
    getPassword();
  }, []);

  // Delete a password by URL
  const deletePassword = async (urlToDelete) => {
    const c = window.confirm("Do you want to delete?");
    if (c) {
      await fetch(`http://localhost:3000/${encodeURIComponent(urlToDelete)}`, { method: 'DELETE' });
      setPasswordArray(passwordArray.filter(password => password.url !== urlToDelete));
    }
  };

  // Save a new password
  const savePassword = async () => {
    if (form.url.length > 3 && form.username.length > 3 && form.password.length > 3) {
      await fetch('http://localhost:3000/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setPasswordArray([...passwordArray, form]);
      setForm({ url: "", username: "", password: "" });
    }
  };

  // Toggle password visibility
  const hidePassword = () => {
    if (refEye.current.src.includes('eye.png')) {
      refEye.current.src = '/src/components/icons/invisible.png';
      refPassword.current.type = 'text';
    } else {
      refEye.current.src = '/src/components/icons/eye.png';
      refPassword.current.type = "password";
    }
  };

  return (
    <>
      {/* Background style */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      {/* Logo */}
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

      {/* Manager div */}
      <div>
        <div className="my-4 flex items-center justify-center bg-black">
          <div className="container bg-green-600 w-fit rounded-lg px-4 py-1">
            <input
              name="url"
              value={form.url}
              onChange={handleChange}
              className="bg-gray-300 m-4 px-2 py-1 w-110 rounded"
              type="text"
              placeholder="Enter website URL"
            />
            <div className="flex gap-6 m-3 py-1 rounded">
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                className="flex bg-gray-300 w-2/3 px-2 rounded"
                type="text"
                placeholder="Enter Username"
              />
              <div className='relative flex bg-gray-300 w-1/3 rounded'>
                <input
                  ref={refPassword}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="px-2"
                  type="password"
                  placeholder="Enter Password"
                />
                <span className='absolute right-[2px]'>
                  <img
                    ref={refEye}
                    src='/src/components/icons/eye.png'
                    className='p-1 w-7 cursor-pointer'
                    onClick={hidePassword}
                    alt="Toggle visibility"
                  />
                </span>
              </div>
            </div>
            <div className="flex  cursor-pointer justify-center items-center py-2 rounded-full">
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
            {passwordArray.length === 0 && <div>Nothing to Show</div>}
            {passwordArray.length !== 0 &&
              <div>
                <table className="table-auto bg-white rounded w-full py23">
                  <thead className='bg-red-100 rounded'>
                    <tr>
                      <th className='text-center min-w-40 px-2 text-red-400'>Website URL</th>
                      <th className='text-center text-red-400'>Username</th>
                      <th className='text-center text-red-400'>Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {passwordArray.map((password, idx) => (
                      <tr key={password.url + idx}>
                        <td className="relative py-1 hover:text-blue-500 min-w-40 px-2 text-center">
                          <button className='' onClick={() => deletePassword(password.url)}>
                            <lord-icon
                              className="absolute left-[4px]"
                              src="https://cdn.lordicon.com/vgpkjbvw.json"
                              trigger="hover"
                              style={{ width: "15px", height: "15px" }}
                            ></lord-icon>
                            <a href={password.url} target='_blank' rel="noopener noreferrer">{password.url}</a>
                          </button>
                        </td>
                        <td className="py-1 text-center">{password.username}</td>
                        <td className="py-1 text-center">
                          {password.password}
                          <button
                            className="relative px-2 cursor-pointer"
                            onClick={() => {
                              navigator.clipboard.writeText(password.password);
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
                    ))}
                  </tbody>
                </table>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
