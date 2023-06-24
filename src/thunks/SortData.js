import { createAsyncThunk } from "@reduxjs/toolkit";
import data from "../ThisWeek/WeekData";

const SortData=createAsyncThunk("sortdata/get",(date)=>{
    const filteredData = data.filter((item) => {
        const itemDate = new Date(item.date);
        const itemMonthYear = itemDate.toLocaleString('default', {
          month: 'short',
          year: 'numeric',
        });
        const filterMonthYear = new Date(date).toLocaleString('default', {
          month: 'short',
          year: 'numeric',
        });
        return itemMonthYear === filterMonthYear;
      });
      return filteredData.sort((a, b) => (a.date > b.date ? 1 : -1));
}); 

export default SortData;