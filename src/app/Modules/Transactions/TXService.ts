import axios from 'axios';
import {API_URL} from "../../Consts";

export class TXService {
    getLatestTXList () {
        return axios.get(`${API_URL}/unconfirmed-transactions?format=json&cors=true`)
    }
}