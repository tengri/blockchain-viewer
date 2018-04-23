import * as React from 'react';

import {IBlockListItem} from "../../../Models";
import {BlockActions} from "../../Blocks/BlockActions";

import {PriceChart} from "../Components/PriceChart";
import {SearchForm} from "../Components/SearchForm";
import {LatestBlockList} from '../Components/LatestBlockList';
import {LatestTXList} from "../Components/LatestTXList";

interface IProps {
    blocks: IBlockListItem[];
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

                <div className="row">
                    <div className="col-lg-7">
                        {/* график цены биткоина за последний месяц */}
                        <PriceChart/>
                    </div>
                    <div className="col-lg-5 col-md-8">
                        {/* форма для поиска блоков по height и транзакций по hash */}
                        <SearchForm/>
                    </div>
                </div>

            </div>
        )
    }
}