import * as React from 'react';
import {IAppState, IBlock} from "../../../Models";
import {connect, Dispatch} from "react-redux";
// import {BlockService} from "../BlockService";
// import {BlockActions} from "../BlockActions";
// import {BlockListView} from './BlockListView';
import {Link} from "react-router-dom";
import {Pager} from "react-bootstrap";
import moment = require("moment");
import {BlockActions} from "../../Blocks/BlockActions";
import {BlockListView} from "../../Blocks/Componens/BlockListView";
import {BlockService} from "../../Blocks/BlockService";

interface IProps {
    actions: BlockActions;
    blocks: IBlock[];
    layout?: string;
}

interface IState {
    firstBlockTime: number;
}

class BlockListComponent extends React.Component<IProps, IState> {

    componentDidMount () {
        this.props.actions.getBlockListByTime();
    }

    render () {
        if (this.props.blocks.length === 0) return null;
        return (
            <div>
                <h3>Latest Blocks</h3>
                <BlockListView blocks={this.props.blocks.slice(0, 10)} />
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

export const BlockList = connect(mapStateToProps, mapDispatchToProps)(BlockListComponent);