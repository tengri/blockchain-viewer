import {
    EProcessStatus, IAsyncData, IBlockListItem, ILatestBlockListMainBranch, ILatestTXListMainBranch,
    IMainBranch, ITXListItem
} from "../../Models";
import {Action, handleActions} from "redux-actions";
import * as Immutable from 'seamless-immutable';
import {MainActionTypes} from "./MainActions";
import {combineReducers} from "redux";

const initialState: IMainBranch = {
    latestBlockList: {
        status: EProcessStatus.IDLE,
        data: []
    },
    latestTXList: {
        status: EProcessStatus.IDLE,
        data: []
    }
}


export const latestBlockListReducers = handleActions({
    [MainActionTypes.MAIN_LOAD_LATEST_BLOCK_LIST + '_SUCCESS']: (state: ILatestBlockListMainBranch, action: Action<IBlockListItem[]>) => {
        return {
            status: EProcessStatus.SUCCESS,
            data: action.payload
        }
    }
}, initialState.latestBlockList);


export const latestTXListReducers = handleActions({
    [MainActionTypes.MAIN_LOAD_LATEST_TX_LIST + '_SUCCESS']: (state: ILatestTXListMainBranch, action: Action<ITXListItem[]>) => {
        return {
            status: EProcessStatus.SUCCESS,
            data: action.payload
        }
    }
}, initialState.latestTXList);

export const MainReducers = combineReducers({
    latestBlockList: latestBlockListReducers,
    latestTXList: latestTXListReducers
})