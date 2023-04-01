import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
    });
  };

  return (

    <button
      className="hidden rounded-3xl bg-[#FB8B01] px-4 py-1 text-white font-jakarta font-bold tracking-wide md:block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
