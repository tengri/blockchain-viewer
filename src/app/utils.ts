

import {Dispatch} from "react-redux";
import {EProcessStatus, IAppState} from "./Models";

export const dispatchAsyncAction = async <TBeginPayload, TResponsePayload>(
    dispatch: Dispatch<IAppState>,
    actionType: string,
    asyncCall: () => Promise<TBeginPayload>
) => {
    dispatch({type: actionType + '_BEGIN', status: EProcessStatus.RUNNING});
    try {
        const data = await asyncCall();
        dispatch({type: actionType + '_SUCCESS', payload: data});
    } catch (error) {
        dispatch({type: actionType + '_ERROR', payload: error});
    }

}