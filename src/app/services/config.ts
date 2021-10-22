import axios from "axios";
import { environment } from "src/environments/environment";

const API = axios.create({
    baseURL: environment.API_HOST,
});

export default API;