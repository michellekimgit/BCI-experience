import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../css/about.css";


function Red({ data }) {

    return (
      <Layout>
        <Seo title="Red" />

        <div id="resRed"></div>
        
        {/* <div class="video-container">
            <iframe
            src="https://www.youtube.com/embed/AlHPi7ViWhU?start=2&autoplay=1" 
            title="Red Pill" frameborder="0" 
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            >
            </iframe>
        </div> */}

        </Layout>
  );
}

export default Red;
