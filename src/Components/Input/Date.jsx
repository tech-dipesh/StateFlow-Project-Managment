import { forwardRef, Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function MyDatePicker(){
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatTheDate=date=>date.toLocaleDateString("en-US",{ month:"numeric", day:"numeric", year:"numeric" });

  const changeInputValue = (date) =>{
    setSelectedDate(date);
    console.log(date);
  }
  return(
    <div className="cursor-pointer">
   <DatePicker
  selected={selectedDate}
  onChange={changeInputValue}
  minDate={new Date()}
  dateFormat="MMMM d, yyyy"
 />
 <h1>{formatTheDate(selectedDate)}</h1>
    </div>
  ) 
};