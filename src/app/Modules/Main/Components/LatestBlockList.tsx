import * as React from 'react';
import {IAppState, IBlockListItem} from "../../../Models";
import {connect, Dispatch} from "react-redux";
import {Link} from "react-router-dom";
import {BlockListView} from "../../Blocks/Componens/BlockListView";
import {MainActions} from "../MainActions";
import {MainService} from '../MainService';
import {BlockService} from "../../Blocks/BlockService";
import {TXService} from "../../Transactions/TXService";

interface IProps {
    actions: MainActions;
    blocks: IBlockListItem[];
}

class LatestBlockListComponent extends React.Component<IProps> {

    componentDidMount () {
        this.props.actions.getLatestBlockList();
    }

    render () {
        if (this.props.blocks.length === 0) return null;
        const blocks = this.props.blocks.slice(0, 5);
        return (
            <div>
                <h3>Latest Blocks</h3>
                <BlockListView blocks={blocks} />
                <Link to="/blocks">See all blocks</Link>
            </div>
        )
    }
}


function mapStateToProps (state: IAppState) {
    return {
        blocks: state.main.latestBlockList.data
    }
}

function mapDispatchToProps(dispatch: Dispatch<IAppState>) {
    return {
        actions: new MainActions(new MainService(), new BlockService(), new TXService(), dispatch)
    }
}

export const LatestBlockList = connect(mapStateToProps, mapDispatchToProps)(LatestBlockListComponent);