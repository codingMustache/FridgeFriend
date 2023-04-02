import { useLoaderData } from 'react-router-dom';

const Profile = () => {
  const userData = useLoaderData();

  return (
    <div className="flex justify-center items-center h-screen">
      {userData ? <h1>{userData.name}</h1> : <h1>Loading...</h1>}
    </div>
  );
};

export default Profile;
