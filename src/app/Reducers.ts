
import { combineReducers } from 'redux'
import {BlockDetailsReducers, BlockListReducers} from "./Modules/Blocks/BlockReducers";
import {TXDetailsReducers} from "./Modules/Transactions/TXReducers";
import {MainReducers} from "./Modules/Main/MainReducers";

export const Reducers = combineReducers({
    blockDetails: BlockDetailsReducers,
    blockList: BlockListReducers,
    txDetails: TXDetailsReducers,
    main: MainReducers,
});