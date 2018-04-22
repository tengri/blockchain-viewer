import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {IAppState, ITXView} from "../../../Models";

import {TXListView} from "../../Transactions/Components/TXListView";
import {MainActions} from "../MainActions";
import {MainService} from '../MainService';

interface IProps {
    txs: ITXView[];
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
    console.log('LatestTXList state: ', state);

    return {txs: state.main.latestTXList.data}
}

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => ({
    actions: new MainActions(new MainService(), dispatch)
})

export const LatestTXList = connect(mapStateToProps, mapDispatchToProps)(LatestTXListComponent);
