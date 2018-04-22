import {IAppState} from "../../Models";
import {Dispatch} from "react-redux";
import {MainService} from "./MainService";
import {dispatchAsyncAction} from "../../utils";

export const MainActionTypes = {
    MAIN_LOAD_LATEST_BLOCK_LIST: 'MAIN_LOAD_LATEST_BLOCK_LIST',
    MAIN_LOAD_LATEST_TX_LIST: 'MAIN_LOAD_LATEST_TX_LIST'
}

export class MainActions {
    constructor (private service: MainService, private dispatch: Dispatch<IAppState>) {

    }

    async getMartketPriceChart () {

    }

    async getLatestTXList () {
        return dispatchAsyncAction(this.dispatch, MainActionTypes.MAIN_LOAD_LATEST_TX_LIST, () => this.service.getLatestTXList())
    }

    async getLatestBlockList () {
        return dispatchAsyncAction(this.dispatch, MainActionTypes.MAIN_LOAD_LATEST_BLOCK_LIST, () => this.service.getLatestBlockList())
    }
}