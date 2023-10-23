import {IResponse} from "./jsonService";
import {ILaunch} from "../interfaces/launchInterface";
import {spacexService} from "./spacexService";
import {urls} from "../constants/urls";

const launchesService = {
    getAll:():IResponse<ILaunch[]> => spacexService.get(urls.launches)
}
export {launchesService}