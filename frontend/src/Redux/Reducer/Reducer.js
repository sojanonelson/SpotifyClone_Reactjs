import { PLAY_PAUSE } from "../Action/actionTypes";

const initialState = {
  isPlaying: false,
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_PAUSE:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
      default:
      return state;
  }
};

export default audioReducer;