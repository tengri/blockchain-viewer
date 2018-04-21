import * as React from 'react';
import {connect, Dispatch} from "react-redux";
import {IAppState, ITX} from "../../../Models";
import {TXService} from "../TXService";
import {TXActions} from "../TXActions";

interface IProps {
    actions: TXActions;
    txs: ITX[];

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
        txs: state.thList.data
    }
}

function mapDispatchToProps(dispatch: Dispatch<IAppState>) {
    return {
        actions: new TXActions(new TXService(), dispatch)
    }
}

export const TXList = connect(mapStateToProps, mapDispatchToProps)(TXListComponent);



