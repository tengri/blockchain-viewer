import * as React from 'react';
import {IAppState, IBlock} from "../../../Models";
import {connect, Dispatch} from "react-redux";
import {BlockService} from "../BlockService";
import {BlockActions} from "../BlockActions";
import {BlockListView} from './BlockListView';

interface IProps {
    blockActions: BlockActions;
    blocks: IBlock[];
}

class BlockListWidgetComponent extends React.Component<IProps> {
    componentDidMount () {
        this.props.blockActions.getLatestBlockList();
    }

    render () {
        if (this.props.blocks.length === 0) return null;
        return (
            <div>
                <h1>Latest Blocks</h1>
                <BlockListView blocks={this.props.blocks} />

            </div>
        )
    }
}

function mapStateToProps (state: IAppState) {
    console.log('mapStateToProps state: ', state);
    return {
        blocks: state.blockList.data
    }
}

function mapDispatchToProps(dispatch: Dispatch<IAppState>) {
    return {
        blockActions: new BlockActions(new BlockService(), dispatch)
    }
}

export const BlockListWidget = connect(mapStateToProps, mapDispatchToProps)(BlockListWidgetComponent);