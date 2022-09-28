import React from "react";
import { Link } from "react-scroll";
import logo from "../../../assets/img/logo.png";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 w-full h-20 flex justify-between items-center px-5 drop-shadow-xl bg-green-50">
            <Link
                to="about_us"
                spy={true}
                smooth={200}
                duration={500}
                className="cursor-pointer"
            >
                <img src={logo} alt="" className="w-16 cursor-pointer" />
            </Link>

            <ul className="flex gap-12 text-center text-xl font-bold text-green-900 pr-1">
                <li className="text-s">
                    <Link
                        to="about_us"
                        spy={true}
                        smooth={200}
                        duration={500}
                        className="cursor-pointer"
                    >
                        About us
                    </Link>
                </li>
                <li>
                    <Link
                        to="our_process"
                        spy={true}
                        smooth={200}
                        duration={500}
                        className="cursor-pointer"
                    >
                        Our process
                    </Link>
                </li>
                <li>
                    <Link
                        to="client"
                        spy={true}
                        smooth={200}
                        duration={500}
                        className="cursor-pointer"
                    >
                        Clients
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact_us"
                        spy={true}
                        smooth={200}
                        duration={500}
                        className="cursor-pointer"
                    >
                        Contact us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
