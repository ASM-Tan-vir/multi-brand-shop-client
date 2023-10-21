import { useContext } from 'react';
import toast from 'sonner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const GoogleSignInButton = ({ setAuthError }) => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    setAuthError('');

    googleLogin()
      .then((result) => {
        toast.success('Login successful');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Something went wrong');
        setAuthError(error.message);
      });
  };

  return (
    <button
      className="mt-3 w-full btn btn-outline"
      onClick={handleGoogleLogin}
      type="button">
      Google Sign In
    </button>
  );
};

export default GoogleSignInButton;
