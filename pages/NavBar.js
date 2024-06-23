import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" redirectUrl="/" />
        </SignedOut>
      </ul>
    </nav>
  );
};

export default NavBar;
