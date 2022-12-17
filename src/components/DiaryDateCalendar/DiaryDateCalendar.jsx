import React, { useState, forwardRef } from "react";
import { DatePickerWrapper, Icon } from "./DiaryDateCalendar.styled";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import CalendarIcon from "../../images/svg/calendar.svg"

export const DiaryDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  }
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <DatePickerWrapper onClick={onClick} ref={ref}>
        {value}
        <Icon src={CalendarIcon} alt="calendar icon" />
      </DatePickerWrapper>
    </div>
  ));
  return (
    <div>
      <DatePicker 
        selected={selectedDate} 
        onChange={(date) => handleChange(date)} 
        dateFormat="dd.MM.yyyy"
        customInput={<ExampleCustomInput />}
      />
    </div>
  )
}