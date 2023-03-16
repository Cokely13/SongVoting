import Axios from "axios";

const SET_SONGS ="SET_SONGS"
const CREATE_SONG = "CREATE_SONG"
const DELETE_SONG = "DELETE_SONG"


export const setSongs = (songs) =>{
  return{
    type: SET_SONGS,
    songs
  }
};

const _createSong = (song) => {
  return {
    type: CREATE_SONG,
    song,
  };
};

const _deleteSong = (song) => {
  return {
    type: DELETE_SONG,
    song
  };
};

export const fetchSongs = () => {
  return async (dispatch) => {
        const {data}= await Axios.get("/api/playlists");
        dispatch(setSongs(data));
  };
};

export const createSong = (song) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post("/api/playlists", song);
    dispatch(_createSong(created));
    // history.push("/playlists");
  };
};

export const deleteSong = (id, history) => {
  return async (dispatch) => {
    const { data: song } = await Axios.delete(`/api/playlists/${id}`);
    dispatch(_deleteSong(song));
    history.push("/playlists");
  };
};


const initialState = [];
export default function playlistsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SONGS:
      return action.songs;
      case CREATE_SONG:
        return [...state, action.song];
        case DELETE_SONG:
      return state.filter((song) => song.id !== action.song.id)
      ;
      default:
        return state;
    }
  }
