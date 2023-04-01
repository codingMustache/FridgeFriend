import { useAuth0 } from '@auth0/auth0-react';
import LogoWhite from '../assets/LogoWhite.svg';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Drawer = ({ open, toggleDrawer }) => {
  console.log(open);
  return (
    open && (
      <div className="flex justify-end w-full h-screen z-40 absolute top-0 left-0 bg-[#051A2D4D] ">
        <div
          className={`flex flex-col w-1/2 h-screen z-50 absolute bg-[#0B704E] p-4 text-white ease-in-out duration-300  ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex">
            <div className="flex w-full space-x-3 border-b-[1px] border-slate-200/20 pb-4">
              <img src={LogoWhite} alt="Logo" className="h-8 w-8" />
              <h1>FridgeFriend</h1>
            </div>
            <button onClick={toggleDrawer}>
              <XMarkIcon className="h-6 w-6 hover:text-[#FB7712]" />
            </button>
          </div>

          <div className="mt-5 space-y-3">
            <a href="/">
              <h2 className="text-base">Home</h2>
            </a>
            <a href="/profile">
              <h2 className="text-base">Profile</h2>
            </a>
            <button
              className="rounded-3xl bg-[#FB8B01] px-4 py-1 text-white text-xs font-jakarta font-bold tracking-wide"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Drawer;
