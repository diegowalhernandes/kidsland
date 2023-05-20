import Link from 'next/link';
import React, { useState } from 'react'
import { NavbarContainer } from '../src/styles/navbar'
import logo from "../public/images/logo.png"
import Image from 'next/image';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <span className="logo">
      <Image src={logo}  alt='logo' />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/service" onClick={closeMenu}>
          Service
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </NavbarContainer>
  );
};