import axios from 'axios';

import {IBlockListItem} from "../../Models";

import {API_URL, DEFAULT_QUERY} from '../../Consts';

export class BlockService {
    constructor () {

    }

    async getBlockListByTime(time: number = Date.now()): Promise<IBlockListItem[]> {
        const response: any = await axios.get(`${API_URL}/blocks/${time}?${DEFAULT_QUERY}`);
        return response.data.blocks;
    }

    async getBlockByHeight(height: number) {

        return (await axios.get(`${API_URL}/ru/block-height/${height}?${DEFAULT_QUERY}`)).data.blocks[0];
    }

    // async getBlockByHash(hash: string) {
    //     return (await axios.get(`${API_URL}/ru/blocks/${hash}?${DEFAULT_QUERY}`)).data;
    // }
}
