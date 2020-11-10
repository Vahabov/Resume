import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const scrollToRefObject = (ref) => window.scrollTo(0, ref.current.scrollHeight - 100);

export default function Index(props) {

    const myRef = useRef(null);

    const executeScroll = () => {
        scrollToRefObject(myRef);
    };

    return (
        <div
            className="intro"
            ref={myRef}>
            <h3 className="title glitch_effect" data-text={props.introName}>{props.introName}</h3>
            {
                props.crumbnow ?
                    <ul className="breadcrumb_row">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>{props.crumbnow}</li>
                    </ul>
                    : null
            }

            {
                props.mouse ?
                    <button type="button" className="scroll_mouse" onClick={executeScroll}>
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </button>
                    : null
            }
            {
                props.typeWriter ?
                    <div className="typewriter">
                        <h1>{props.typeWriter}</h1>
                    </div>
                    : false
            }
        </div>
    )
}
