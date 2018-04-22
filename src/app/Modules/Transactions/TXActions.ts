import {Dispatch} from "react-redux";
import {TXService} from "./TXService";
import {IAppState} from "../../Models";
import {dispatchAsyncAction} from "../../utils";

export const TXActionTypes = {
  TX_LOAD_LAST_TX_LIST: 'TX_LOAD_LAST_TX_LIST'
};

export class TXActions {
    constructor (private service: TXService, private dispatch: Dispatch<IAppState>) {

    }

}

