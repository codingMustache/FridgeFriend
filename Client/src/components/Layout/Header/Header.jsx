import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../../contexts/user.context';
import LogoGreen from '../../../assets/LogoGreen.svg';
import LoginButton from '../../Auth/LoginButton';

const Header = () => {
  const { currentUser } = useContext(UserContext);

  useMemo(() => {
    console.log('currentUser', currentUser);
  }, [currentUser])


  return (
    <header className="w-full bg-transparent fixed z-50 md:bg-white md:transition-colors md:shadow-sm">
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
          <img
            src={'https://tinyurl.com/4umnyauy'}
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover md:block hidden"
          />
        )}

        <button className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#FFF] hover:bg-opacity-20 md:hidden">
          <Bars3CenterLeftIcon className="h-6 w-6 text-[#051A2D]" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
