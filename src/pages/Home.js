import React from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import FirstArticle from "../components/First_Article";

const Home = () => {

    return (
        <div className="home-page">
            <NavBar />
            <Title />
            <FirstArticle />
        </div>
    );


}

export default Home;