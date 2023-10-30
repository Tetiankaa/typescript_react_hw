import axios from "axios";
import {baseURLJson} from "../constants/urls";

const axiosServiceJson = axios.create({baseURL:baseURLJson});

export {axiosServiceJson}