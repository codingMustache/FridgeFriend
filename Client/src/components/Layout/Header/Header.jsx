import { useAuth0 } from '@auth0/auth0-react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../../contexts/user.context';
import LogoGreen from '../../../assets/LogoGreen.svg';
import LoginButton from '../../Auth/LoginButton';

const Header = ({ toggleDrawer }) => {
  const { user, logout } = useAuth0();
const Header = () => {
  const { currentUser } = useContext(UserContext);

  useMemo(() => {
    console.log('currentUser', currentUser);
  }, [currentUser])


  return (
    <header className="w-full bg-transparent fixed z-30 md:bg-white md:transition-colors md:shadow-sm">
      <nav className="p-4 flex justify-between">
        <div className="flex space-x-2">
          <img src={LogoGreen} alt="Logo" className="h-8 w-8" />
          <h1 className="text-[#051A2D] font-jakarta font-bold">
            FridgeFriend
          </h1>
        </div>
        {!currentUser ? (
          <LoginButton />
        ) : (
          <div className="flex space-x-4">
            <a href="/profile">
              <img
                src={user.picture}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover md:block hidden"
              />
            </a>
            <button
              className="hidden rounded-3xl bg-[#FB8B01] px-4 py-1 text-white font-jakarta font-bold text-xs tracking-wide md:block"
              onClick={() => logout()}
            >
              Log out
            </button>
          </div>
        )}

        <button
          className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#FFF] hover:bg-opacity-20 md:hidden"
          onClick={toggleDrawer}
        >
          <Bars3CenterLeftIcon className="h-6 w-6 text-[#051A2D]" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
