var rp = require('request-promise-native');

import {IBlock} from 'app/Models';

import {API_URL} from '../../Consts';

export class BlockService {
    constructor(restActive: boolean = true) {

    }

    public async getBlocksByTime(time: number = Date.now()): Promise<IBlock[]> {
        const {blocks} =  JSON.parse(await rp(`${API_URL}/blocks/${time}?format=json`));
        return blocks;
    }
}
