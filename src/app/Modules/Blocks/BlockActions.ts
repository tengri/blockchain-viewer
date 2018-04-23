import {Dispatch} from 'redux';
import {BlockService} from "./BlockService";
import {dispatchAsyncAction} from "../../utils";
import {IAppState} from "../../Models";

export const BlockActionTypes = {
    LOAD_BLOCK_LIST: 'LOAD_BLOCK_LIST',
    LOAD_NEXT_BLOCK_LIST: 'LOAD_NEXT_BLOCK_LIST',
    LOAD_PREV_BLOCK_LIST: 'LOAD_PREV_BLOCK_LIST',
    LOAD_BLOCK_BY_HASH: 'LOAD_BLOCK_BY_HASH'
};

export class BlockActions {

    constructor (private service: BlockService, private dispatch: Dispatch<IAppState>) {
    }

    async getBlockListByTime (time?: number) {
        return dispatchAsyncAction(this.dispatch, BlockActionTypes.LOAD_BLOCK_LIST,
            () => this.service.getBlockListByTime(time)
        )
    }

    async getBlockByHash (hash: string) {
        return dispatchAsyncAction(this.dispatch, BlockActionTypes.LOAD_BLOCK_BY_HASH,
            () => this.service.getBlockByHash(hash)
        )
    }
}
