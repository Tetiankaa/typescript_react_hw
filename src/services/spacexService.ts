import axios from "axios";
import {baseSpaceX} from "../constants/urls";

export const spacexService = axios.create({baseURL: baseSpaceX});
