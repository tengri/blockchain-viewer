import { createAction } from 'redux-actions';
import { TodoModel } from 'app/Models';

export namespace TodoActions {
    export enum Type {
        GET_TX_LIST = 'GET_TX_LIST'
    }

    export const getTXList = createAction<PartialPick<TodoModel, 'text'>>(Type.GET_TX_LIST);
}

export type TodoActions = Omit<typeof TodoActions, 'Type'>;
