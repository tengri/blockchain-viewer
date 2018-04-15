import { Enum } from 'typescript-string-enums';
import { Dispatch } from 'redux';
import {BlockService} from "./BlockService";

export const blockActionTypes = Enum('GET_BLOCK_BY_ID', 'GET_BLOCKS_LIST');

export class BlockActions {
    constructor(protected service: BlockService, protected dispatch: Dispatch<any>) {}

    getBlockByHeight (height: number) {

    }

}

// export namespace TodoActions {
//
//   export const addTodo = createAction<PartialPick<TodoModel, 'text'>>(Type.ADD_TODO);
// }
//
// export type TodoActions = Omit<typeof TodoActions, 'Type'>;
