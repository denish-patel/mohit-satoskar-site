import './Tiles.css';
import { Tilt } from 'react-tilt';

function Tiles() {

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 25,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 300,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    };

    return (

        <Tilt options={defaultOptions}>
            <div className="card card-wh">
                <div className='card-img-full'></div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2">Card subtitle</h6>
                    <h5 className="card-title">Card title</h5>
                    <p>Get free resources and fresh ideas for teaching with Apple.</p>
                </div>
            </div>
        </Tilt>

    );
}

export default Tiles;