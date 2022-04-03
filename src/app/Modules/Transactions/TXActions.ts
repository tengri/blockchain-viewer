import {Dispatch} from "react-redux";
import {TXService} from "./TXService";
import {IAppState} from "../../Models";
import {dispatchAsyncAction} from "../../utils";

export const TXActionTypes = {
    TX_LOAD_TX_DETAILS: 'TX_LOAD_TX_DETAILS'
};

export class TXActions {
    constructor (private service: TXService, private dispatch: Dispatch<IAppState>) {
    }

    async getTXByHash(hash: string) {
        return dispatchAsyncAction(this.dispatch, TXActionTypes.TX_LOAD_TX_DETAILS, () => this.service.getTXByHash(hash));
    }
}

