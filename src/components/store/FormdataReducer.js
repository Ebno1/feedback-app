import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  feedBackNum: null,
  message: "",
  saved: [],
  averageRating: null,
};
const formDataSlice = createSlice({
  name: "formDataReducer",
  initialState: initialData,
  reducers: {
    enterNum(state, action) {
      state.feedBackNum = action.payload;
    },
    enterMessage(state, action) {
      state.message = action.payload;
    },
    replaceSaved(state, action) {
      state.saved = action.payload[0];
      state.averageRating = action.payload[1];
    },
    submitRating(state, action) {
      state.saved = [action.payload, ...state.saved];
      state.averageRating = (
        state.saved.reduce((tot, item) => (tot += item.rate), 0) /
        state.saved.length
      ).toFixed(2);
      state.message = "";
      state.feedBackNum = 0;
    },
    remove(state, action) {
      state.saved = state.saved.filter((item) => action.payload !== item.id);
      state.averageRating = (
        state.saved.reduce((tot, item) => (tot += item.rate), 0) /
        state.saved.length
      ).toFixed(2);
    },
    edit(state, action) {
      const editable = state.saved.find((item) => item.id === action.payload);
      state.saved = state.saved.filter((item) => item.id !== action.payload);
      state.averageRating = (
        state.saved.reduce((tot, item) => (tot += item.rate), 0) /
        state.saved.length
      ).toFixed(2);
      state.message = editable.message;
      state.feedBackNum = editable.rate;
    },
  },
});

export const upload_Data = ({ savedArrData, averageRating }) => {
  return async (dispatch) => {
    await fetch(
      "your firebase link",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ arrData: savedArrData, avg: averageRating }),
      }
    );
  };
};

export const replace = () => {
  return async (dispatch) => {
    const response = await fetch(
      "your firebase link"
    );
    if (!response.ok) {
      throw new Error("vot is the matter");
    }
    try {
      const data = await response.json();
      if (data) {
        dispatch(formAction.replaceSaved([data.arrData, data.avg]));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const formAction = formDataSlice.actions;

export default formDataSlice.reducer;
