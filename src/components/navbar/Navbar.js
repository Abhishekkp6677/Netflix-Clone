import React, { useEffect, useState } from 'react'
import "./Navbar.css";

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const scroll= ()=>{
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);

        }
        window.addEventListener("scroll", scroll);

        return () => {
            window.removeEventListener("scroll",scroll);
        }
    }, [])

    return (
        <div className={`navbar ${show && "nav__black"}`} >
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
        </div>
    )
}

export default NavBar