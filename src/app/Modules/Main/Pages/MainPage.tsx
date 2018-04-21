import * as React from 'react';

import {connect, Dispatch} from 'react-redux';

import { bindActionCreators } from 'redux'
import {IAppState, IBlock} from "../../../Models";
import {BlockActions} from "../../Blocks/BlockActions";
import {BlockList} from "../../Blocks/Componens/BlockList";
import {TXListView} from "../../Transactions/Components/TXListView";
import {BlockService} from "../../Blocks/BlockService";
import {Link} from "react-router-dom";
import {PriceChart} from "../Components/PriceChart";
import {SearchBlockForm} from "../Components/SearchBlockForm";

interface IProps {
    blocks: IBlock[];
    blockActions: BlockActions;
}

/**
 * Главная страница
 */
export class MainPage extends React.Component<IProps> {
    render () {
        return (
            <div>
                {/* список 10-ти последних блоков */}
                <BlockList/>

                {/* список 10-ти последних транзацкции */}
                <TXListView/>

                {/* график цены биткоина за последний месяц */}
                <PriceChart/>

                {/* форма для поиска блоков по height и транзакций по hash */}
                <SearchBlockForm/>
            </div>
        )
    }
}