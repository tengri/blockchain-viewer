import * as React from 'react';

import {connect, Dispatch} from 'react-redux';
import {IAppState, IBlock} from '../Models';
import {BlockActions} from '../Modules/Blocks/BlockActions';

import { bindActionCreators } from 'redux'
import {BlockService} from "../Modules/Blocks/BlockService";


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
            <div>main</div>
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