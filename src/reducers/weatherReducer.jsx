export const initialState = {
  city: "London",
  unit: true,
  current: {},
  forecast: [],
  error: null,
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return { ...state, ...action.payload, error: null };
    case "CHANGE_CITY":
      return { ...state, city: action.payload };
    case "TOGGLE_UNIT":
      return { ...state, unit: state.unit === true ? false : true}; //if unit is C it is True else is False
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
};