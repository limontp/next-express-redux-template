import { GET_SAMPLE, SAMPLE_ERROR } from "../types";

export const setSampleData = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SAMPLE,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: error,
    });
  }
};
