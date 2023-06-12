import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

function Auth({ path }) {

  return (
    <>
      {path === '/signin' && <SignIn />}
      {path === '/signup' && <SignUp />}
    </>
  );
}

export default Auth;