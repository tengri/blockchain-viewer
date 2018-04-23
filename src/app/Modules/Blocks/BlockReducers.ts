import {
    EProcessStatus, IBlockListItem, IBlockListBranch, IBlockDetails, IBlockDetailsBranch} from "../../Models";
import {Action, handleActions} from "redux-actions";
import {BlockActionTypes} from "./BlockActions";
import * as Immutable from 'seamless-immutable';

const initialBLockDetailsState: IBlockDetailsBranch = Immutable({
    status: EProcessStatus.IDLE,
    data: null
})

export const BlockDetailsReducers = handleActions({
    [BlockActionTypes.LOAD_BLOCK_BY_HASH + '_SUCCESS']: (state: IBlockDetailsBranch, action: Action<IBlockDetails>) => {
        return (
            {
                status: EProcessStatus.SUCCESS,
                data: action.payload
            }
        );
    }
}, initialBLockDetailsState);


const initialState: IBlockListBranch = Immutable({
    status: EProcessStatus.IDLE,
    data: []
})

export const BlockListReducers = handleActions({
    [BlockActionTypes.LOAD_BLOCK_LIST + '_SUCCESS']: (state: IBlockListBranch, action: Action<IBlockListItem[]>) => {
        return (
            {
                status: EProcessStatus.SUCCESS,
                data: action.payload
            }
        );
    }
}, initialState);