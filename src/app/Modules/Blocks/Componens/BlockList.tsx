import * as React from 'react';
import {IAppState, IBlockView} from "../../../Models";
import {connect, Dispatch} from "react-redux";
import {BlockService} from "../BlockService";
import {BlockActions} from "../BlockActions";
import {BlockListView} from './BlockListView';
import {Pager} from "react-bootstrap";
import moment = require("moment");
import isEmpty = require("lodash/fp/isEmpty");

interface IProps {
    actions: BlockActions;
    blocks: IBlockView[];
    layout?: string;
}

interface IState {
    firstBlockTime: number;
}

class BlockListComponent extends React.Component<IProps, IState> {
    state = {
        firstBlockTime: moment().valueOf()
    }

    componentDidMount () {
        this.props.actions.getBlockListByTime();
    }

    toPrevPage = () => {
        const firstBlockTime = moment(this.state.firstBlockTime)
            .subtract(1, 'millisecond')
            .startOf('day')
            .valueOf();
        this.setState({firstBlockTime});
        this.props.actions.getBlockListByTime(firstBlockTime);
    }

    toNextPage = () => {
        const firstBlockTime = moment(this.state.firstBlockTime)
            .endOf('day')
            .add(1, 'millisecond')
            .valueOf();
        this.setState({firstBlockTime});
        this.props.actions.getBlockListByTime(firstBlockTime);
    }

    render () {
        if (this.props.blocks.length === 0) return null;
        return (
            <div>
                <h3>Blocks mined on: {moment(this.state.firstBlockTime).format('MMMM Do YYYY')}</h3>

                <Pager>
                    <Pager.Item onClick={this.toPrevPage}>Previous</Pager.Item>
                    <Pager.Item
                        onClick={this.toNextPage}
                        disabled={moment(this.state.firstBlockTime).isAfter(moment().startOf('day'))}>
                        Next
                    </Pager.Item>
                </Pager>

                {!isEmpty(this.props.blocks) && <BlockListView blocks={this.props.blocks} />}
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