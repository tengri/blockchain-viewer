import {Action, Dispatch} from 'redux';
import {BlockService} from "./BlockService";
import {dispatchAsyncAction} from "../../utils";
import {IBlock, IAppState} from "../../Models";
import {ThunkAction} from 'redux-thunk';
import {Enum} from "typescript-string-enums";

const NAMESPACE = 'BLOCK';

export const BlockActionTypes = {
    LOAD_LATEST_BLOCK_LIST: 'LOAD_LATEST_BLOCK_LIST',
    LOAD_NEXT_BLOCK_LIST: 'LOAD_NEXT_BLOCK_LIST',
    LOAD_PREV_BLOCK_LIST: 'LOAD_PREV_BLOCK_LIST'
};

export class BlockActions {
    constructor (private service: BlockService, private dispatch: Dispatch<IAppState>) {
    }


    async getLatestBlockList () {
        return dispatchAsyncAction(this.dispatch, BlockActionTypes.LOAD_LATEST_BLOCK_LIST, this.service.getBlocksByTime)
        // this.dispatch({
        //     type: BlockActionTypes.LOAD_LATEST_BLOCK_LIST
        // });
        //
        // const blocks = await this.service.getBlocksByTime();
        // this.dispatch({type: BlockActionTypes.LOAD_LATEST_BLOCK_LIST + '_SUCCESS'}, {data: blocks, status: Success});
    }
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
//         return dispatchAsyncBound(this.dispatch, BlockActionTypes.LOAD_LATEST_LIST, () => this.service.getBlocksByTime());
//     }
//
//     getNextBlockList (time: number) {
//         return dispatchAsyncBound(this.dispatch, BlockActionTypes.LOAD_NEXT_LIST, () => this.service.getBlocksByTime(time));
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
