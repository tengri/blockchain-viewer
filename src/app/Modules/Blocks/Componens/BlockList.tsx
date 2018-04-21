import * as React from 'react';
import {IAppState, IBlock} from "../../../Models";
import {connect, Dispatch} from "react-redux";
import {BlockService} from "../BlockService";
import {BlockActions} from "../BlockActions";
import {BlockListView} from './BlockListView';
import {Link} from "react-router-dom";
import {Pager} from "react-bootstrap";

interface IProps {
    blockActions: BlockActions;
    blocks: IBlock[];
    layout?: string;
}

class BlockListComponent extends React.Component<IProps> {
    componentDidMount () {
        this.props.blockActions.getLatestBlockList();
    }

    toPrevPage = () => {

    }

    toNextPage = () => {
        
    }

    render () {
        if (this.props.blocks.length === 0) return null;
        return (
            <div>
                <h1>Latest Blocks</h1>
                <BlockListView blocks={this.props.blocks} />

                <Link to="blocks">See all blocks</Link>

                <Pager>
                    <Pager.Item href="#" onClick={this.toPrevPage}>Previous</Pager.Item>
                    <Pager.Item href="#" onClick={this.toNextPage}>Next</Pager.Item>
                </Pager>

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
        blockActions: new BlockActions(new BlockService(), dispatch)
    }
}

export const BlockList = connect(mapStateToProps, mapDispatchToProps)(BlockListComponent);