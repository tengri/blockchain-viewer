import axios from 'axios';
import {API_URL, DEFAULT_QUERY} from "../../Consts";

export class TXService {
    async getLatestTXList (hash: string) {
        return (await axios.get(`${API_URL}/ru/rawtx/${hash}?${DEFAULT_QUERY}`)).data
    }
}