import {IBlock} from "../../Models/index";

var rp = require('request-promise-native');

import {API_URL} from '../../Consts';

export class BlockService {
    constructor(restActive: boolean = true) {

    }

    public async getBlocksByTime(time: number = Date.now()): Promise<IBlock[]> {
        const {blocks} =  JSON.parse(await rp(`${API_URL}/blocks/${time}?format=json`));
        return blocks;
    }
}
