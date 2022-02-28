import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cars: [
    ["Model 3", "https://www.tesla.com/model3"],
    ["Model S", "https://www.tesla.com/models"],
    ["Model Y", "https://www.tesla.com/modely"],
    ["Model X", "https://www.tesla.com/modelx"],
    ["Solar Roofs", "https://www.tesla.com/solarroof"],
    ["Solar Panels", "https://www.tesla.com/solarpanels"],
  ],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
