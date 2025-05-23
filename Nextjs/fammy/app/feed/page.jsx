"use client";
import "../globals.css";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { Roboto, Comic_Neue } from "next/font/google";
import Button from "@mui/material/Button"; // Import Button from Material-UI
import Chip from "@mui/material/Chip";
import { Avatar } from "@mui/material"; // Import Chip for tags
import Sidebar from "@/components/Sidebar";

const comic = Comic_Neue({
  weight: "400",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  const updateLikes=()=>{
    // "use server"
    console.log("likes updated");
  }
  const updateDislikes=()=>{
    // "use server"
    console.log("dislikes updated");
  }

  const fetchData = async () => {
    try {
      let req = await fetch("/api/posts");
      let data = await req.json();
      console.log(data.posts)
      setPosts(data.posts); 
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-19 py-24 [background:radial-gradient(180%_145%_at_10%_0%,#000_50%,#63e_120%)]"></div>
      <Navbar />
      <Sidebar/>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-10">
          <lord-icon
            src="https://cdn.lordicon.com/ydhnbgpj.json"
            trigger="loop"
            style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        </div>
      ) : (
        <div>
          

          {/* Cards Section */}
          <div className="flex flex-wrap gap-6 justify-center m-4 ml-39 mt-20">
            {posts.slice(1,Math.random()*50).map((post) => (
              
              <div key={post.id} className="containers">
                <div className="px-2 text-left align-top rounded text-white">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag, index) => (
                      <Chip key={index} label={tag} variant="outlined" className="text-white"/>
                    ))}
                  </div>
                  <div>
                    <span className="mb-2 text-green-500 mr-10">
                      Likes: {post.reactions.likes}
                    </span>
                    <span className="mb-2 text-red-500">
                      Dislikes: {post.reactions.dislikes}
                    </span>
                    <p className={`mb-2 text-white ${comic.className} p-2 rounded`}>
                      {post.body}
                    </p>
                    <div className="flex justify-between ">
                      <Button variant="contained" onClick={updateLikes}>Like </Button>
                      <Button variant="contained" onClick={updateDislikes}>DisLike</Button>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}