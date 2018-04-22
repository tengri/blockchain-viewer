import * as React from 'react';

import {IBlockView} from "../../../Models";
import {BlockActions} from "../../Blocks/BlockActions";

import {PriceChart} from "../Components/PriceChart";
import {SearchBlockForm} from "../Components/SearchBlockForm";
import {LatestBlockList} from '../Components/LatestBlockList';
import {LatestTXList} from "../Components/LatestTXList";

interface IProps {
    blocks: IBlockView[];
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
                <LatestTXList/>

                {/* график цены биткоина за последний месяц */}
                <PriceChart/>

                {/* форма для поиска блоков по height и транзакций по hash */}
                <SearchBlockForm/>
            </div>
        )
    }
}