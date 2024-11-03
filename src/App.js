import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Layout';

// COmponents
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';

import gsap from 'gsap-trial';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {

    const main = useRef();
    const smoother = useRef();

    useGSAP(
        () => {
            // create the smooth scroller FIRST!
            smoother.current = ScrollSmoother.create({
                smooth: 2, // seconds it takes to "catch up" to native scroll position
                effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
            });

        },
        { scope: main }
    );


    return (
        <>
            <div className="App">
                <div id="smooth-wrapper" ref={main}>
                    <div id="smooth-content">
                        
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    <Route index element={<Home />} />
                                    <Route path="about" element={<About />} />
                                    <Route path="project" element={<Project />} />
                                    <Route path="contact" element={<Contact />} />
                                </Route>
                            </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
