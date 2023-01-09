import React from "react";
import Title from "../components/Title";
import FirstArticle from "../components/First_Article";
import SecondArticle from "./SecondArticle";

const Home = () => {

    return (
        <div className="home-page">
            <Title />
            <FirstArticle />
        </div>
    );


}

export default Home;