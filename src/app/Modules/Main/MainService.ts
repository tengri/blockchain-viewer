import axios from 'axios';

import {API_URL, DEFAULT_QUERY} from "../../Consts";
import {IAsyncData, ITXView} from "../../Models";

export class MainService {
    async getMartketPriceChart () {
        const response = await axios.get(`${API_URL}/ru/charts/market-price?${DEFAULT_QUERY}`);
        return response.data;
    }

    async getLatestBlockList () {
        const response =  await axios.get(`${API_URL}/blocks/${Date.now()}?${DEFAULT_QUERY}`);
        return response.data.blocks.slice(0, 5);
    }

    async getLatestTXList () : Promise<ITXView[]> {
        const response =  await axios.get(`${API_URL}/ru/unconfirmed-transactions?${DEFAULT_QUERY}`);
        return response.data.txs.slice(0, 5);
    }
}