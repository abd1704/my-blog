import "./home.css" ;
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios  from "axios";
import { Url } from "../../Url";
import { useLocation } from "react-router-dom";

export default function Home() {
const[posts,setPosts]=useState([]);
const{search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async ()=>{
    console.log( "this is url " + `${Url}posts`+search)
     const res = await axios.get(`${Url}posts`+search);
     
     setPosts(res.data)
    }
    fetchPosts();
  },[search] )
  return (
    <>
    <Header />
    <div className="home">
         <Posts posts={posts} />
         <Sidebar />
    </div>
    </>
  )
}
