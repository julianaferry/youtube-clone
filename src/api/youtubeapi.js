import axios from "axios";

export const KEY = 'AIzaSyAT19ykoV0Of3Nrk5TTS_kzYX6dDk5zq90';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})