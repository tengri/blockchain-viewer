import {IAppState, ISearchResult} from "../../Models";
import {Dispatch} from "react-redux";
import {MainService} from "./MainService";
import {dispatchAsyncAction} from "../../utils";
import {BlockService} from "../Blocks/BlockService";
import {TXService} from "../Transactions/TXService";

export const MainActionTypes = {
    MAIN_LOAD_LATEST_BLOCK_LIST: 'MAIN_LOAD_LATEST_BLOCK_LIST',
    MAIN_LOAD_LATEST_TX_LIST: 'MAIN_LOAD_LATEST_TX_LIST',
    MAIN_LOAD_CHART_DATA: 'MAIN_LOAD_CHART_DATA',
    MAIN_SEARCH_DATA: 'MAIN_SEARCH_DATA',
    MAIN_RESET_SEARCH_FORM: 'MAIN_RESET_SEARCH_FORM'
}

export class MainActions {
    constructor (private service: MainService, private blockService: BlockService, private txService: TXService, private dispatch: Dispatch<IAppState>) {

    }

    async getChartData () {
        return dispatchAsyncAction(this.dispatch, MainActionTypes.MAIN_LOAD_CHART_DATA, () => this.service.getChartData())
    }

    async getLatestTXList () {
        return dispatchAsyncAction(this.dispatch, MainActionTypes.MAIN_LOAD_LATEST_TX_LIST, () => this.service.getLatestTXList())
    }

    async getLatestBlockList () {
        return dispatchAsyncAction(this.dispatch, MainActionTypes.MAIN_LOAD_LATEST_BLOCK_LIST, () => this.service.getLatestBlockList())
    }

    async searchByHash (hash: string) {
        return dispatchAsyncAction(this.dispatch, MainActionTypes.MAIN_SEARCH_DATA,
            async () => {
                let result: ISearchResult = {};
                try {
                    result.tx = await this.txService.getTXByHash(hash);
                } catch (err) {}

                try {
                    result.block = await this.blockService.getBlockByHash(hash);
                } catch (err) {}
                return result;
            }
        )
    }

    async resetForm () {
        this.dispatch({type: MainActionTypes.MAIN_RESET_SEARCH_FORM})
    }
}