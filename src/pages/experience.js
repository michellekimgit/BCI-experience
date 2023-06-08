import React, {useState} from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../css/about.css";
import MediaComponent from "../components/mediaComponent";
import fetch from 'node-fetch';
import { MuseClient } from "muse-js";
import { zipSamples } from "muse-js";
import { Subject } from "rxjs";
import { take} from "rxjs/operators";
import { catchError, multicast } from "rxjs/operators";
import CopyrightComponent from "../components/copyright"
import Header from "../components/header";
import matrix_text from "../assets/matrix_text.mp4";
import {
  bandpassFilter,
  epoch,
} from "@neurosity/pipes";
const IndexContainerDiv = styled.div`
  display: grid;
  grid: 150px / auto auto auto;
  @media screen and (max-width: 600px) {
    margin-top: -10rem;
  }
`;
const HeaderDiv = styled.div`
  //width: 400px;
`;

function Experience({ data }) {
    const onMouseClickHandler = () => {
      navigate("/menu/");
    };

    const [displayState, setDisplayState] = useState(0);
    
    async function connectDevice() {
      setDisplayState(1);
      try {
          // Connect with the Muse EEG Client
          // setStatus(generalTranslations.connecting);
          window.source = new MuseClient();
          window.source.enableAux = window.enableAux;
          await window.source.connect();
          await window.source.start();
          window.source.eegReadings$ = window.source.eegReadings;

          window.pipeRaw$ = null;
          window.multicastRaw$ = null;
          window.subscriptionRaw = null;

          // Build Pipe
          window.pipeRaw$ = zipSamples(window.source.eegReadings$).pipe(
            bandpassFilter({ 
              cutoffFrequencies: [.1, 100], 
              nbChannels: window.nchans }),
            epoch({
              duration: 1024,
              interval: 25,
              samplingRate: 256
            }),
            catchError(err => {
              console.log(err);
            })
          );

          //should probably have a time so this doesn't switch until video finishes playing
          setDisplayState(2);
      } catch (err) {
        console.log("Connection error: " + err);
      }
    }

    async function runModel() {
      const dataToSave = [];
      var localObservable$ = null;

      window.multicastRaw$ = window.pipeRaw$.pipe(
        multicast(() => new Subject())
      );

      window.multicastRaw$.connect();

      fetch('https://neurafutures-backend-339518.ue.r.appspot.com/setupModel');

      localObservable$ = window.multicastRaw$.pipe(
        take(121 * 1000)
      );

      localObservable$.subscribe({
        next(x) {
          dataToSave.push(Object.values(x));
        }
      });

      setTimeout(function() {
        var params = { 'data' : dataToSave};
        console.log(dataToSave);
        fetch('https://neurafutures-backend-339518.ue.r.appspot.com/getData', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        });
      }, 1000*121);

      setTimeout(function(){
        fetch('https://neurafutures-backend-339518.ue.r.appspot.com/classify')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                if (myJson.classification === "no") {
                  window.location = "/red/";
                } else {
                  window.location = "/blue/";
                }
            });
      },1000 * 122); //delay is in milliseconds 
    }

    async function switchStartCollection() {
      setDisplayState(3);
      runModel();
    }


    if (displayState === 3) {
      return (
        <Layout>
          <Seo title="Experience" />
          <MediaComponent
          onMouseClickHandler={onMouseClickHandler}
          locationPath={{ previousPath: "/menu" }}
        />

          <h3 className="subtitle2">Remember to stay focused on the pill of your choice.</h3>

          <h4 className="subtitle3">Focus on blue pill now if this is the pill of your choice.</h4>

          <div className="container">
              <div id="boxBlue"></div>
              <div id="boxRed"></div>
            </div>
  
          </Layout>
      );
    } else if (displayState === 2) {
      return (
        <Layout>
          <Seo title="Experience" />
          <MediaComponent
          onMouseClickHandler={onMouseClickHandler}
          locationPath={{ previousPath: "/menu" }}
        />
  
        <video src={matrix_text} controls="true" width="90%" autoplay="autoplay" type='video/mp4' onEnded={() => switchStartCollection()} muted playsInline>
        </video>
  
        </Layout>
    );
    } else if (displayState === 1) {
      return (
        <Layout>
          <Seo title="Experience" />
          <MediaComponent
          onMouseClickHandler={onMouseClickHandler}
          locationPath={{ previousPath: "/menu" }}
        />

          <h3 className="subtitle2">Please follow popup instructions to pair device.</h3>

          </Layout>
      );
    }

    return (
      <Layout>
        <Seo title="Experience" />
        <MediaComponent
        onMouseClickHandler={onMouseClickHandler}
        locationPath={{ previousPath: "/menu" }}
      />

      <h3 className="subtitle2">Please use Chrome for this experience.</h3>

      <button class="button" onClick={connectDevice}>Get Started!</button> 

      </Layout>
    );
  
}

export default Experience; 