import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import PostInfo from "./pages/PostInfo/PostInfo";
import {UserContextProvider} from "./context/UserContext";

function App() {
    return (
        <div className="container mx-auto pt-12 pb-5 px-2 h-screen">
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/post/:id" element={<PostInfo/>}/>
                </Routes>
            </UserContextProvider>
        </div>
    );
}

export default App;
