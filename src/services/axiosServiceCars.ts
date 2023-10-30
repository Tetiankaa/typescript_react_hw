import axios from "axios";
import {baseURLCars} from "../constants/urls";

const axiosServiceCars = axios.create({baseURL:baseURLCars});

export {axiosServiceCars}