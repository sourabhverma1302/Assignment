import { createSlice } from "@reduxjs/toolkit";
import data from "../ThisWeek/WeekData";

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'long' });
const year = currentDate.getFullYear();

const formattedDate = `${day} ${month} ${year}`;

const Filterdata=createSlice({
    name:'filterdata',
    initialState:{
        demodata:data,
    },
    reducers:{
        filteryourdata:(state,action)=>{
            if(action.payload === "type"){
            state.demodata=data.slice().sort((a, b) => {
                if (a.name < b.name) {
                  return -1; // Sort in ascending order
                } else if (a.name > b.name) {
                  return 1;
                } else {
                  return 0;
                }
              });}
              else if(action.payload === "date"){
                const currentDate = new Date();
                const ninetyDaysAgo = new Date();
                ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

                state.demodata= data.filter((item) => {
                const itemDate = new Date(item.date);
                return itemDate >= ninetyDaysAgo && itemDate <= currentDate;
                });
              }
              else if(action.payload === "status"){
                state.demodata=data.slice().sort((a, b) => {
                    if (a.status < b.status) {
                      return -1; // Sort in ascending order
                    } else if (a.status > b.status) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
              }
        }
    }
})

export const{filteryourdata} =Filterdata.actions;
export default Filterdata.reducer;