import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DairyDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  }
  return (
    <div>
      <DatePicker 
        selected={selectedDate} 
        onChange={(date) => handleChange(date)} 
        dateFormat="dd.mm.yyyy"
      />
    </div>
  )
}