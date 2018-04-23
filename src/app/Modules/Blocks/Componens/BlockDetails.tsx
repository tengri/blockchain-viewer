import * as React from 'react';
import {connect, Dispatch} from "react-redux";
import {IAppState, IBlockDetails} from "../../../Models";
import {BlockActions} from '../BlockActions';
import {BlockService} from "../BlockService";
import {RouteComponentProps, withRouter} from "react-router";
import * as Table from "react-bootstrap/lib/Table";
import {TXListView} from "../../Transactions/Components/TXListView";
import * as PageHeader from "react-bootstrap/lib/PageHeader";
import {TXPagination} from "./TXPagination";

interface IProps extends RouteComponentProps<{hash: string}> {
    actions: BlockActions;
    block: IBlockDetails;
}

class BlockDetailsComponent extends React.Component<IProps>{

    componentDidMount () {
        this.props.actions.getBlockByHash(this.props.match.params.hash);
    }

    render () {
        const {block} = this.props;
        if (!block) return null;
        return (
            <div className="row">
                <div className="col-md-8 col-lg-6">
                    <PageHeader>
                        Block #{block.height}
                    </PageHeader>
                    <Table>
                        <tbody>
                        <tr>
                            <th>Number Of Transactions</th>
                            <td>{block.n_tx}</td>
                        </tr>
                        <tr>
                            <th>Height</th>
                            <td>{block.height}</td>
                        </tr>
                        <tr>
                            <th>Size</th>
                            <td>{block.size/100}</td>
                        </tr>
                        <tr>
                            <th>Fee</th>
                            <td>{block.fee/100000000} BTC</td>
                        </tr>
                        </tbody>
                    </Table>

                    <h3>Transactions</h3>
                    <TXPagination txs={block.tx}/>
                </div>
            </div>
        )
    }
}

const mapStateProps = (state: IAppState) => {
    return {
        block: state.blockDetails.data
    };
}

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => {
    return {
        actions: new BlockActions(new BlockService(), dispatch)
    };
}

export const BlockDetails = withRouter(connect(mapStateProps, mapDispatchToProps)(BlockDetailsComponent));
