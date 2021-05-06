import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Yesterday", duration: "2:05" },
    { title: "Hey Jude", duration: "8:05" },
    { title: "A Hard Day's Night", duration: "2:35" },
    { title: "Lucy in the Sky with Diamonds", duration: "3:25" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
