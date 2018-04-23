import axios from 'axios';

import {API_URL, DEFAULT_QUERY} from "../../Consts";
import {IAsyncData, IChart, ITXListItem} from "../../Models";

export interface IChartPoint {
    x: number;
    y: number;
}

export class MainService {
    async getChartData () {
        const response = await axios.get(`${API_URL}/ru/charts/market-price?${DEFAULT_QUERY}`);
        return response.data;
    }

    async getLatestBlockList () {
        const response =  await axios.get(`${API_URL}/blocks/${Date.now()}?${DEFAULT_QUERY}`);
        return response.data.blocks.slice(0, 5);
    }

    async getLatestTXList () : Promise<ITXListItem[]> {
        const response = await axios.get(`${API_URL}/ru/unconfirmed-transactions?${DEFAULT_QUERY}`);
        return response.data.txs.slice(0, 5);
    }
}