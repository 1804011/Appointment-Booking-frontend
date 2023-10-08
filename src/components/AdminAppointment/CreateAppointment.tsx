import React,{useState,useEffect} from 'react';
import Slot from '../Slot/Slot';
import axios from 'axios'
import {rootUrl} from '../../utils/rootUrl'
const CreateAppointment = () => {
    const [slots,setSlots]=useState([{
        startTime:"09:00 AM",
        endTime:"12:00 PM",
        bookingStartTime:"08:00 AM",
        bookingEndTime:"09:00 AM"
    }])
    useEffect(()=>{
      axios.get(rootUrl+'doctor/slots',{withCredentials:true})
           .then(({data})=>data.status ? setSlots(data.data): setSlots([]))  
           .catch(()=>setSlots([]))
    },[])
    return (
        <div>
            <p className='text-center font-[700] text-xl'>Slots Available today</p>
          <div className='flex justify-between flex-wrap mx-8'>
            {
                slots.map((slot,idx)=><Slot id={idx} {...slot}/>)
            }
          </div>
        </div>
    );
};

export default CreateAppointment;