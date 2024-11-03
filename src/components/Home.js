import React, { useRef } from "react";
// import Tiles from "../ui-design/Tiles";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function Home() {

    const home_container = useRef();

    // let [animateload, setanimateload] = useState(false);


    // let slickNonAutoSliderSettings = {
    //     dots: false,
    //     infinite: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     cssEase: "linear",
    //     variableWidth: false,
    //     arrows: false
    // };

    // let slickSliderSettings = {
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 30000,
    //     autoplaySpeed: 0.0001,
    //     cssEase: "linear",
    //     variableWidth: false
    // };

    useGSAP(() => {

        let tl = gsap.timeline({ delay: 1.2 });
        tl.to(".gradient-radical", 15,{ background:"radial-gradient(circle, rgba(138,138,138,1) 0%, rgba(87,87,87,1) 97%)",repeat:-1, yoyo:true, repeatDelay:0.2 });

        
        tl.from(".mohit-text", {
                y: 0, 
                ease: 'power4',
                duration: 3,
            }
        ); 

        // tl.fromTo(".satoskar-text",
        //     {
        //         y: -190, opacity: 0, duration: 2,
        //         scrollTrigger: {
        //             trigger: '.satoskar-text',
        //             scrub: true
        //         }
        //     },
        //     {
        //         y: -0, opacity: 1, duration: 2,
        //         scrollTrigger: {
        //             trigger: '.satoskar-text',
        //             scrub: true
        //         }
        //     }
        // ); // <-- automatically reverted

    }, { scope: home_container }); // <-- easily add a scope for selector text (optional)

    return (
        <div className="Home">

            <section id="logo-animate-section">

            </section>

            <section id="short-desc-section" className="gradient-radical" ref={home_container}>
                <figure className="mohit-figure backgroundImage"></figure>
                
                    
                    <div className="text-content">
                         <div className="mohit-text">
                            <span>M</span>
                            <span>O</span>
                            <span>H</span>
                            <span>I</span>
                            <span>T</span>
                        </div>

                        <div className="satoskar-text">
                            <em className="holding-text">
                                <span>S</span>
                                <span>A</span>
                                <span>T</span>
                                <span>O</span>
                                <span>S</span>
                                <span>S</span>
                                <span>K</span>
                                <span>A</span>
                                <span>R</span>
                            </em>
                        </div>

                        <div className="">
                            <span>
                                Masters in Software Engineering
                            </span>
                        </div>
                    </div>

                    
                
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </section>

            <section id="project-scroll-section">
                
                {/* <Slider className="slider-container" {...slickNonAutoSliderSettings}>
                        <div>
                           <Tiles></Tiles>
                        </div>
                        <div>
                            <Tiles></Tiles>
                        </div>
                        <div>
                            <Tiles></Tiles>
                        </div>
                        <div>
                            <Tiles></Tiles>
                        </div>
                        <div>
                            <Tiles></Tiles>
                        </div>
                        <div>
                            <Tiles></Tiles>
                        </div>
                        <div>
                            <Tiles></Tiles>
                        </div>
                    </Slider>

                 <Slider className="slider-container" {...slickSliderSettings}>
                        <div>
                            <Tiles></Tiles>
                        </div>
                        <div>
                            <Tiles></Tiles>
                        </div>
                        <div>
                            <Tiles></Tiles>
                        </div>
                        <div>
                            <Tiles></Tiles>
                        </div>
                    </Slider> */}
            </section>



        </div>
    );










}

export default Home;





