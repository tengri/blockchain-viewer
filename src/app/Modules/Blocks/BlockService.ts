import axios from 'axios';

import {IBlockView} from "../../Models";

import {API_URL} from '../../Consts';

export class BlockService {
    constructor () {

    }

    async getBlockListByTime(time: number = Date.now()): Promise<IBlockView[]> {
        const response: any =  await axios.get(`${API_URL}/blocks/${time}?format=json&cors=true`);
        return response.data.blocks;
    }
}
