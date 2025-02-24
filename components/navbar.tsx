import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">

            <Link href="/" className="font-bold">food stuff!</Link>
            <Link href="/latest">the latest</Link>
            <Link href="/best">best of</Link>
            <Link href="/about">about</Link>

        </nav>

    );
};

export default Navbar
