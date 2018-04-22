import {EProcessStatus, ITXListBranch, ITXView} from "../../Models";
import {Action, handleActions} from "redux-actions";
import {TXActionTypes} from "./TXActions";
import * as Immutable from 'seamless-immutable';

const initialState: ITXListBranch = Immutable({
    status: EProcessStatus.IDLE,
    data: []
})

export const TXListReducers = handleActions({
    [TXActionTypes.TX_LOAD_LAST_TX_LIST + '_SUCCESS']: (state: ITXListBranch, action: Action<ITXView[]>) => {
        return (
            {
                status: EProcessStatus.SUCCESS,
                data: action.payload
            }
        );
    }
}, initialState);
