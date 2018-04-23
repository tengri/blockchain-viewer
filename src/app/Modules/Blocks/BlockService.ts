import axios from 'axios';

import {IBlockListItem} from "../../Models";

import {API_URL, DEFAULT_QUERY} from '../../Consts';

export class BlockService {

    async getBlockListByTime(time: number = Date.now()): Promise<IBlockListItem[]> {
        const response: any = await axios.get(`${API_URL}/blocks/${time}?${DEFAULT_QUERY}`);
        return response.data.blocks;
    }

    async getBlockByHash(hash: string) {
        return (await axios.get(`${API_URL}/ru/rawblock/${hash}?${DEFAULT_QUERY}`)).data;
    }
}
