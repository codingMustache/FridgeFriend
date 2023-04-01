import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const { DOMAIN } = process.env;
  const { CLIENT_ID } = process.env;
  const { CALLBACK_URL } = process.env;

  const onRedirectCallback = appState => {
    navigate(appState?.returnTo || window.location.pathname);
  }

  if (!(DOMAIN && CLIENT_ID && CALLBACK_URL)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: CALLBACK_URL,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
