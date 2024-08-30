import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const createNewRoom=(e:React.MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    const id=uuidv4();
    setRoomId(id);
    toast.success("created a new room Id");
    //toast.error("failing message");
  }

  const joinHandle=()=>{
    if(!username || !roomId){
      toast.error("Enter valid username and room id");
      return ;
    }

    navigate(`/editor/${roomId}`);
    toast.success("Room created/validated");
  }

  const [roomId,setRoomId]=useState("");
  const [username,setUsername]=useState("");
  const navigate=useNavigate();
  return (
    <div className="flex h-screen flex-col justify-center items-center bg-zinc-800">
      <div className="bg-zinc-600 rounded-2xl flex flex-col z-40">
        <div className="mt-4 mx-4 mb-6">
          <div className="text-2xl font-bold text-yellow-200">CoWriterHub</div>
          <div className="text-green-600 text-sm">Realtime Collaboration</div>
        </div>

        <div className="mx-4 mb-2 text-white">Paste invitation ROOM ID</div>
        <input placeholder="ROOM ID" className="rounded p-3 mb-2 mx-4 " value={roomId} onChange={(e)=>{
          setRoomId(e.target.value);
        }}></input>
        <input placeholder="User Name" className="rounded p-3 mb-2 mx-4 " onChange={(e)=>{
          setUsername(e.target.value);
        }}></input>

        <div className="flex justify-end mx-4 mb-3">
          <button className="bg-green-500 py-2 px-6 rounded-lg" onClick={joinHandle}>Join</button>
        </div>
        
        <div className="p-2 mx-4 mb-4 text-white">
          If you don't have an invite link then create new <a onClick={createNewRoom} className="text-green-600 underline cursor-pointer"> new room</a>
        </div>

       
      </div>
      
    </div>
  )
   
};
