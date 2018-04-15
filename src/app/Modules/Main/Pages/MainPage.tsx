import * as React from 'react';

import {connect, Dispatch} from 'react-redux';

import { bindActionCreators } from 'redux'
import {IAppState, IBlock} from "../../../Models";
import {BlockActions} from "../../Blocks/BlockActions";
import {BlockListWidget} from "../../Blocks/Componens/BlockListWidget";
import {THList} from "../../Transactions/Component/THList";
import {BlockService} from "../../Blocks/BlockService";


interface IProps {
    blocks: IBlock[];
    blockActions: BlockActions;
}

export class MainPage extends React.Component<IProps> {
    render () {
        return (
            <div>
                <BlockListWidget/>
                <THList/>
            </div>
        )
    }
}