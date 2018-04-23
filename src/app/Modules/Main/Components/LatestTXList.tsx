import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {IAppState, ITXListItem} from "../../../Models";

import {TXListView} from "../../Transactions/Components/TXListView";
import {MainActions} from "../MainActions";
import {MainService} from '../MainService';
import {BlockService} from "../../Blocks/BlockService";
import {TXService} from "../../Transactions/TXService";

interface IProps {
    txs: ITXListItem[];
    actions: MainActions;
}

class LatestTXListComponent extends React.Component<IProps> {

    componentDidMount () {
        this.props.actions.getLatestTXList();
    }

    render () {
        return (
            <div>
                <h3>Latest Transactions</h3>
                <TXListView txs={this.props.txs} />
            </div>
        )
    }
};

const mapStateToProps = (state: IAppState) => {
    return {txs: state.main.latestTXList.data}
}

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => ({
    actions: new MainActions(new MainService(), new BlockService(), new TXService(), dispatch)
})

export const LatestTXList = connect(mapStateToProps, mapDispatchToProps)(LatestTXListComponent);
