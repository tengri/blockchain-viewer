import * as React from 'react';

import {IBlock} from "../../../Models";
import {BlockActions} from "../../Blocks/BlockActions";
import {TXListView} from "../../Transactions/Components/TXListView";

import {PriceChart} from "../Components/PriceChart";
import {SearchBlockForm} from "../Components/SearchBlockForm";
import {LatestBlockList} from '../Components/LatestBlockList';

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
                <LatestBlockList />

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