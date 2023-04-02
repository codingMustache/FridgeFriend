import { useContext, useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {
  Modal,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { UserContext } from '../contexts/user.context';
import axios from 'axios'

const Ticket = () => {
  const { currentUser } = useContext(UserContext);
  const { fridgeId } = useParams();
  const navigate = useNavigate();

  const [serviceType, setServiceType] = useState('');
  const [details, setDetails] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // const handleRadioChange = (e) => {
  //   setServiceType(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('cmon')
    axios.post('http://localhost:3000/api/ticket/new_ticket', {
      openedBy: currentUser._id,
      fridgeId,
      serviceType,
      details,
      imageUrl,
    })
      .then(() => {
        console.log('eh?')
        navigate(`/details/${fridgeId}`);
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className='flex flex-col space-y-4 justify-center items-center h-screen'>

      <h1>Create a Ticket</h1>
     <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel id="ticket-type-radio-group-label">Select option that best describes issue</FormLabel>
        <RadioGroup
          aria-labelledby='ticket-type-radio-group-label'
          onChange={(e) => setServiceType(e.target.value)}
          >
          <FormControlLabel value='food' control={<Radio />} label='Food' />
          <FormControlLabel value='maintenance' control={<Radio />} label='Maintenance' />
          <FormControlLabel value='cleaning' control={<Radio />} label='Cleaning' />
          <FormControlLabel value='transport' control={<Radio />} label='Transport' />
          <FormControlLabel value='misc' control={<Radio />} label='Miscellaneous' />
        </RadioGroup>
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          placeholder='Details'
          helperText='Please describe in more details'
          multiline={true}
        />
        <button
          type='submit'
        >
          Submit
        </button>
        </FormControl>
      </form>
    <button
        onClick={() => navigate(`/details/${fridgeId}`)}
      >
        Go back
      </button>

    </div>
  )
}

export default Ticket;
