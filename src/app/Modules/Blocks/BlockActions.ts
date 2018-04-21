import {Action, Dispatch} from 'redux';
import {BlockService} from "./BlockService";
import {dispatchAsyncAction} from "../../utils";
import {IBlock, IAppState} from "../../Models";
import {isEmpty} from 'lodash';
import {ThunkAction} from 'redux-thunk';
import {Enum} from "typescript-string-enums";
import assign = require("lodash/fp/assign");
import concat = require("lodash/fp/concat");

const NAMESPACE = 'BLOCK';

export const BlockActionTypes = {
    LOAD_LATEST_BLOCK_LIST: 'LOAD_LATEST_BLOCK_LIST',
    LOAD_NEXT_BLOCK_LIST: 'LOAD_NEXT_BLOCK_LIST',
    LOAD_PREV_BLOCK_LIST: 'LOAD_PREV_BLOCK_LIST'
};

// const mergeData = <T>(cache: T[], data: T[]): T[] => {
    // const LOAD_NEXT_BLOCK_LIST
// }

export class BlockActions {

    cashedBlockLists: IBlock[][] = [];

    constructor (private service: BlockService, private dispatch: Dispatch<IAppState>) {
        this.cashedBlockLists = [];
    }

    async getBlockListByTime (time?: number) {
        return dispatchAsyncAction(this.dispatch, BlockActionTypes.LOAD_LATEST_BLOCK_LIST,
            () => this.service.getBlockListByTime(time)
        )
    }


    // async getNextBlockList () {
    //     return dispatchAsyncAction(this.dispatch, BlockActionTypes.LOAD_NEXT_BLOCK_LIST,
    //         async () => {
    //             let time;
    //             if (!isEmpty(this.cashedBlockLists)) {
    //                 const lastBlockList = this.cashedBlockLists[this.cashedBlockLists.length-1];
    //                 if (isEmpty(lastBlockList)) {
    //                     return lastBlockList;
    //                 }
    //                 console.log('lastBlockList: ', lastBlockList);
    //                 time = lastBlockList[lastBlockList.length-1].time;
    //             }
    //
    //             const blocks = (await this.service.getBlockListByTime(time)).slice(0, 20);
    //             this.cashedBlockLists.push(blocks);
    //             return blocks;
    //     })
    // }
    //
    // async getPrevBlockList () {
    //     //TODO: сделать кеширование поумней.
    //     return this.cashedBlockLists.pop();
    // }
}

// const blockActions = new BlockActions(new BlockService());


// export class BlockActions {
//     constructor(protected service: BlockService, protected dispatch: Dispatch<IAppState>) {
//         this.dispatch = dispatch;
//     }
//
//     getBlockByHeight (height: number) {
//
//     }
//
//     getLatestBlockList () {
//         return dispatchAsyncBound(this.dispatch, BlockActionTypes.LOAD_LATEST_LIST, () => this.service.getBlockListByTime());
//     }
//
//     getNextBlockList (time: number) {
//         return dispatchAsyncBound(this.dispatch, BlockActionTypes.LOAD_NEXT_LIST, () => this.service.getBlockListByTime(time));
//     }
//
//     getPrevBlockList () {
//         this.dispatch({type: BlockActionTypes.LOAD_PREV_LIST});
//
//     }
//
// }

// export namespace TodoActions {
//
//   export const addTodo = createAction<PartialPick<TodoModel, 'text'>>(Type.ADD_TODO);
// }
//
// export type TodoActions = Omit<typeof TodoActions, 'Type'>;
