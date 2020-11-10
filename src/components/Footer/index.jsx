import React from 'react'
import { Link } from 'react-router-dom'
import FBIcon from '../../assets/images/facebook.svg';
import LinkedinIcon from '../../assets/images/linkedin.svg';
import { ReactSVG } from 'react-svg';
import './index.css'
export default function index() {
    return (
        <footer>
            <p className="copyright">
                © 2020. All rights reserved.
            </p>
            <ul className="social_icons">
                <li>
                    <Link target='_blank' to={"//www.facebook.com/kamil.vahabov/"}>
                        <ReactSVG src={FBIcon} />
                    </Link>
                </li>
                <li>
                    <Link target='_blank' to={"//www.linkedin.com/in/kamil-vahabov/"}>
                        <ReactSVG src={LinkedinIcon} />
                    </Link>
                </li>
            </ul>
        </footer>
    )
}
