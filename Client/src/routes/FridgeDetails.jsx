import axios from 'axios';
import { useState, useEffect } from 'react';
import { BellAlertIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useParams, useNavigate } from 'react-router-dom';

const FridgeDetails = () => {
  const { fridge } = useParams();
  const navigate = useNavigate();

  const [fridgeDetails, setFridgeDetails] = useState(null);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

  useEffect(() => {
    const getFridgeDetails = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/fridges/${fridge}`
        );
        setFridgeDetails(data);
      } catch (error) {
        console.error('Error fetching fridge details:', error);
      }
    };

    getFridgeDetails();
  }, [fridge]);

  if (!fridgeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="h-full w-2/5 flex justify-center items-center shadow-md">
        <div className="grid gap-4 p-6">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={fridgeDetails.insideImages[0].url}
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4">
            {fridgeDetails.insideImages.map(e => (
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={e.url}
                  alt="test"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="h-full  w-3/5 flex justify-center items-center px-4">
        <div className="w-full h-3/4">
          <div className=" space-y-4">
            <h1 className="font-bold text-4xl md:text-6xl">
              {fridgeDetails.location.address.streetAddress} Fridge
            </h1>
            <p className="italic font-semibold text-lg md:text-3xl">
              {fridgeDetails.location.address.streetAddress}
            </p>
          </div>

          <div>
            <div className="mt-3 flex flex-col items-start md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
              <h1 className="text-2xl font-jakarta font-medium text-[#FB8B01] mt-2 md:mt-0">
                Tickets
              </h1>

              <div className="flex space-x-4 order-first md:order-none">
                <button
                  className="bg-[#6F9D80] flex justify-center items-center py-2 px-3 rounded-3xl font-semibold text-base hover:bg-[#5F8D70] text-white"
                  onClick={() => navigate(`/new-ticket/${fridge}`)}
                >
                  <PlusIcon className="h-7 w-7 md:h-5 md:w-5" /> Create Ticket
                </button>

                <button
                  className="bg-[#F5F5F5] flex justify-center items-center p-2 rounded-3xl font-semibold text-base hover:bg-[#E5E5E5]"
                  onClick={() => navigate(`/subscribe/${fridge}`)}
                >
                  <BellAlertIcon className="h-7 w-7 md:h-5 md:w-5" /> Get
                  Notified
                </button>
              </div>
            </div>

            {/* map thru the tickets here */}

            <h1>Tickets feed</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FridgeDetails;
