import { useContext, useState } from "react";
import {
  Modal,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import { UserContext } from "../contexts/user.context";
import axios from 'axios';

const Subscribe = ({ fridgeId, isSubscribeModalOpen, setIsSubscribeModalOpen }) => {
  const { currentUser } = useContext(UserContext);

  const [subObj] = useState({});
  // const [isExclusiveSelected, setIsExclusiveSelected] = useState(false);

  const handleSubmit = () => {
    axios.put(`http://localhost:3000/api/subscription/${fridgeId}`)
  }

  const handleCheckChange = (e) => {
    if (e.target.checked) {
      subObj[e.target.value] = true;
    } else {
      delete subObj[e.target.value];
    }
  }

  return (
    <Modal
      open={isSubscribeModalOpen}
    >
      <button
        onClick={() => setIsSubscribeModalOpen(false)}
      >
        Cancel
      </button>
      <h1>Subscribe to Notifications for fridge at FIX ME</h1>
      <h2>What would you like to be notified about?</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <h3>Help Available Notifications</h3>
          <FormControlLabel control={<Checkbox onChange={(e) => handleCheckChange(e)} />} label='Food has been added to the fridge' value='foodAdded' />
          <h3>Help Needed Notifications</h3>
          {/* <FormControlLabel control={<Checkbox />} label='Please notify me for all issues with this fridge' value='all' /> */}
          <FormControlLabel control={<Checkbox onChange={(e) => handleCheckChange(e)} />} label='Maintenance needed' value='maintenance' />
          <FormControlLabel control={<Checkbox onChange={(e) => handleCheckChange(e)} />} label='Cleaning needed' value='cleaning' />
          <FormControlLabel control={<Checkbox onChange={(e) => handleCheckChange(e)} />} label='Food issues (i.e. raw food needs cooking)' value='food' />
          <FormControlLabel control={<Checkbox onChange={(e) => handleCheckChange(e)} />} label='Transportation issues (i.e. someone has or needs food but cannot get to fridge' value='transportation' />
          <FormControlLabel control={<Checkbox onChange={(e) => handleCheckChange(e)} />} label='Miscellaneous issues' value='misc' />
        </FormGroup>
      </form>
    </Modal>
  )

}

export default Subscribe;
