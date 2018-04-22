import {EProcessStatus, ITXDetails, ITXDetailsBranch} from "../../Models";
import {Action, handleActions} from "redux-actions";
import {TXActionTypes} from "./TXActions";
import * as Immutable from 'seamless-immutable';

const initialTXDetailsState: ITXDetailsBranch = Immutable({
    status: EProcessStatus.IDLE,
    data: null
})

export const TXDetailsReducers = handleActions({
    [TXActionTypes.TX_LOAD_TX_DETAILS + '_SUCCESS']: (state: ITXDetailsBranch, action: Action<ITXDetails>) => {
        return (
            {
                status: EProcessStatus.SUCCESS,
                data: action.payload
            }
        );
    }
}, initialTXDetailsState);