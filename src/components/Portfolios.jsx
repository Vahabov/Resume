import React from 'react';
import { Link } from 'react-router-dom';

export default function Portfolios(props) {
    return (
        <Link className="item" target='_blank' to={`//${props.link}`}>
            <div className="img">
                <img src={props.img} alt="#" />
            </div>
            <span className="name">{props.name}</span>
        </Link>
    )
}
