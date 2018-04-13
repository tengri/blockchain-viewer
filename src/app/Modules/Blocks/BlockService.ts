import {get, post} from 'request';

import {IBlock} from 'app/Models';

import {API_URL} from 'app/Consts';

export class BlockService {
    getBlockByHash(hash: string) {
        return get(`${API_URL}/${hash}`);
    }

    async getLatestBlocks(number?: number): Promise<IBlock[]> {
        const block =  await get(`${API_URL}/latestblock`).response;
        console.log('block: ', block);
        return [block];
    }
}
