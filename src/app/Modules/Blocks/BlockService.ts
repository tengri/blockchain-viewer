import axios from 'axios';

import {IBlock} from "../../Models";

// var rp = require('request-promise-native');

import {API_URL} from '../../Consts';

export class BlockService {
    constructor () {

    }
    async getBlocksByTime(time: number = Date.now()): Promise<IBlock[]> {
        const response: any =  await axios.get(
            `${API_URL}/blocks/${time}?format=json&cors=true`);

        console.log('response blocks: ', response.blocks);

        return response.blocks;
    }
}
