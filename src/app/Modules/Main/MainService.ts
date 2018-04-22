import axios from 'axios';

import {API_URL, DEFAULT_QUERY} from "../../Consts";
import {IAsyncData, ITXListItem} from "../../Models";

export class MainService {
    async getMartketPriceChart () {
        const response = await axios.get(`${API_URL}/ru/charts/market-price?${DEFAULT_QUERY}`);
        return response.data;
    }

    async getLatestBlockList () {
        const response =  await axios.get(`${API_URL}/blocks/${Date.now()}?${DEFAULT_QUERY}`);
        return response.data.blocks.slice(0, 5);
    }

    async getLatestTXList () : Promise<ITXListItem[]> {
        const response =  await axios.get(`${API_URL}/ru/unconfirmed-transactions?${DEFAULT_QUERY}`);
        return response.data.txs.slice(0, 5);
    }

    async getTXByHash (hash: string) {
        const response =  await axios.get(`${API_URL}/u/rawtx/${hash}?${DEFAULT_QUERY}`);
        return response.data;
    }

    async getBlockByHeight (height: string) {
        const response =  await axios.get(`${API_URL}/ru/block-height//${height}?${DEFAULT_QUERY}`);
        return response.data;
    }
}