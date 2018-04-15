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

class MainPageComponent extends React.Component<IProps> {
    componentWillMount () {
        this.props.blockActions.getLatestBlockList();
    }
    render () {
        return (
            <div>
                <BlockListWidget/>
                <THList/>
            </div>
        )
    }
}

function mapStateToProps (state: IAppState) {
    return {
        blocks: state.blocks.data
    }
}

function mapDispatchToProps(dispatch: Dispatch<IAppState>) {
    return {
        blockActions: new BlockActions(new BlockService(), dispatch)
    }
}

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);