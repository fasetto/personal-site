import React from "react";
import NavLink from "./NavLink";

export default function Nav() {
    return (
        <nav className="flex text-sm sm:text-base">
            <NavLink label="Home" href="/" exact />
            <NavLink label="About" href="/about" exact />
            <NavLink label="Blog" href="/blog" exact />
        </nav>
    );
}
