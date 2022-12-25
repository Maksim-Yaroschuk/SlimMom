import React, { useState, forwardRef } from "react";
import { DatePickerWrapper, Icon } from "./DiaryDateCalendar.styled";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import CalendarIcon from "../../images/svg/calendar.svg"
import { useDispatch } from "react-redux";
import { setDate } from "redux/productsSlice";
import moment from "moment/moment";

export const DiaryDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch()
  const handleChange = (date) => {
    const formattedDate = moment(date).format("DD.MM.YYYY")
    setSelectedDate(date);
    dispatch(setDate(formattedDate)) 
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
        maxDate={new Date()}
      />
    </div>
  )
}