import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import React, { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = () => {
  // Destructuring the main menu from menu object
  const { main } = menu;

  // States declaration
  const [navOpen, setNavOpen] = useState(false);

  // Logo source
  const { logo } = config.site; // Adjust the path to your logo

  return (
    <header className="header">
      <nav className="navbar container flex items-center justify-between">
        {/* Logo */}
        <div className="order-0">
          <Logo src={logo} />
        </div>

        {/* Sign In/Sign Out */}
        <div className="order-1 ml-auto flex items-center space-x-4 md:ml-0 md:order-2">
          <SignedIn>
            <UserButton />
			{typeof window !== 'undefined' && window.location.pathname !== '/layouts/Dash' && (
				<Link href="/Users/manavgurnani21/Downloads/netaware-ai/layouts/Dash" className="btn btn-primary z-0 py-[14px]">
				Get Started
				</Link>
			)}
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" redirectUrl="/protected">
              <span className="nav-link">Sign in</span>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
