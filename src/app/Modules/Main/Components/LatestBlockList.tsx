import * as React from 'react';
import {IAppState, IBlock} from "../../../Models";
import {connect, Dispatch} from "react-redux";
import {Link} from "react-router-dom";
import {BlockActions} from "../../Blocks/BlockActions";
import {BlockListView} from "../../Blocks/Componens/BlockListView";
import {BlockService} from "../../Blocks/BlockService";

interface IProps {
    actions: BlockActions;
    blocks: IBlock[];
}

class LatestBlockListComponent extends React.Component<IProps> {

    componentDidMount () {
        this.props.actions.getBlockListByTime();
    }

    render () {
        if (this.props.blocks.length === 0) return null;
        const blocks = this.props.blocks.slice(0, 10);
        return (
            <div>
                <h3>Latest Blocks</h3>
                <BlockListView blocks={blocks} />
                <Link to="blocks">See all blocks</Link>
            </div>
        )
    }
}


function mapStateToProps (state: IAppState) {
    return {
        blocks: state.blockList.data
    }
}

function mapDispatchToProps(dispatch: Dispatch<IAppState>) {
    return {
        actions: new BlockActions(new BlockService(), dispatch)
    }
}

export const LatestBlockList = connect(mapStateToProps, mapDispatchToProps)(LatestBlockListComponent);