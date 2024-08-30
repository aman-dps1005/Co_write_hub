import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { EditorPage } from "./pages/editorPage";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{
        success: {
          style: {
            background: "#FFFFFF"
          },
        },
        error:{
          style:{
            background:"#000000",
            color:"#FFFFFF"
          }
        }
      }}></Toaster>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/editor/:roomID" element={<EditorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
