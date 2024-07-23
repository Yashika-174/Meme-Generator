import MemeCard from "../components/MemeCard";
import { useEffect,useState } from "react";
import { getAllMemes } from "../api/memes";

export default function Home(){

    const [data,setData]=useState([]);

    useEffect(() => {
        async function fetchPost() {
        const res1 = await getAllMemes();
            console.log(res1);
            setData(res1.data.memes);
    }
    fetchPost();
        }, []);


    return (
    <div className="row">
    {
        data && data.map((ele)=>{
            return (<MemeCard image={ele.url} title={ele.name}/>)
        })
    }
    </div>)
}