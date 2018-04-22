import * as React from 'react';
import {connect, Dispatch} from "react-redux";
import {TXActions} from "../Transactions/TXActions";
import {IAppState, ITXView} from "../../Models";
import {TXService} from "../Transactions/TXService";


interface IProps {
    actions: TXActions;
    txs: ITXView[];
}

class TXListComponent extends React.Component<IProps> {

    render () {
        return (
            <div>TXList</div>
        )
    }
}

function mapStateToProps (state: IAppState) {
    return {
        txs: state.main.latestTXList
    }
}

function mapDispatchToProps(dispatch: Dispatch<IAppState>) {
    return {
        actions: new TXActions(new TXService(), dispatch)
    }
}

export const TXList = connect(null, null)(TXListComponent);



