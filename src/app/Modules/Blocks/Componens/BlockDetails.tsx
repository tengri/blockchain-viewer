import * as React from 'react';
import {connect, Dispatch} from "react-redux";
import {IAppState, IAsyncData, IBlockDetails} from "../../../Models";
import {BlockActions} from '../BlockActions';
import {BlockService} from "../BlockService";
import {RouteComponentProps, withRouter} from "react-router";
import * as Table from "react-bootstrap/lib/Table";

interface IProps extends RouteComponentProps<{height: number}> {
    actions: BlockActions;
    block: IBlockDetails;
}

class BlockDetailsComponent extends React.Component<IProps>{

    componentDidMount () {
        this.props.actions.getBlockByHeight(this.props.match.params.height);
    }

    render () {
        const {block} = this.props;
        if (!block) return null;
        return (
            <div>
                <h3>Block #{block.height}</h3>
                <Table>
                    <tr>
                        <th>Number Of Transactions</th>
                        <td>{block.n_tx}</td>
                    </tr>
                    <tr>
                        <th>Output Total</th>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                </Table>
            </div>
        )
    }
}

const maptStateProps = (state: IAppState) => {
    return {
        block: state.blockDetails.data
    };
}

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => {
    return {
        actions: new BlockActions(new BlockService(), dispatch)
    };
}



export const BlockDetails = withRouter(connect(maptStateProps, mapDispatchToProps)(BlockDetailsComponent));
