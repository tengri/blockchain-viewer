import {
    EProcessStatus, ISearchResult, IBlockListItem, IChart, IChartBranch, ILatestBlockListMainBranch,
    ILatestTXListMainBranch,
    IMainBranch, ISearchBranch, ITXListItem
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
    },
    chart: {
        status: EProcessStatus.IDLE,
        data: {values: [], name: ''}
    },
    search: {
        status: EProcessStatus.IDLE,
        data: {tx: null, block: null}
    }
}


const latestBlockListReducers = handleActions({
    [MainActionTypes.MAIN_LOAD_LATEST_BLOCK_LIST + '_SUCCESS']: (state: ILatestBlockListMainBranch, action: Action<IBlockListItem[]>) => {
        return {
            status: EProcessStatus.SUCCESS,
            data: action.payload
        }
    }
}, initialState.latestBlockList);


const latestTXListReducers = handleActions({
    [MainActionTypes.MAIN_LOAD_LATEST_TX_LIST + '_SUCCESS']: (state: ILatestTXListMainBranch, action: Action<ITXListItem[]>) => {
        return {
            status: EProcessStatus.SUCCESS,
            data: action.payload
        }
    }
}, initialState.latestTXList);

const ChartReducers = handleActions({
    [MainActionTypes.MAIN_LOAD_CHART_DATA + '_SUCCESS']: (state: IChartBranch, action: Action<IChart>) => {
        return {
            status: EProcessStatus.SUCCESS,
            data: action.payload
        }
    }
}, initialState.chart);

const searchReducers = handleActions({
    [MainActionTypes.MAIN_SEARCH_DATA + '_SUCCESS']: (state: ISearchBranch, action: Action<ISearchResult>) => {
        return {
            status: EProcessStatus.SUCCESS,
            data: action.payload
        }
    },
    [MainActionTypes.MAIN_RESET_SEARCH_FORM]: (state: ISearchBranch) => {
        return initialState.search
    }
}, initialState.search)

export const MainReducers = combineReducers({
    latestBlockList: latestBlockListReducers,
    latestTXList: latestTXListReducers,
    chart: ChartReducers,
    search: searchReducers
})