// pages/protected.js
import { withAuth, RedirectToSignIn } from '@clerk/nextjs';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>You can see this because you are signed in.</p>
    </div>
  );
};

export default withAuth(ProtectedPage, {
  // Redirect to sign-in page if not authenticated
  redirectTo: '/sign-in',
});
