import * as React from 'react';
import {IAppState, ITXDetails} from "../../../Models";
import {connect, Dispatch} from "react-redux";
import {TXActions} from "../TXActions";
import {TXService} from "../TXService";
import {RouteComponentProps, withRouter} from "react-router";
import {Table} from "react-bootstrap";
import moment = require("moment");
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";

interface IProps extends RouteComponentProps<{hash: string}>{
    tx: ITXDetails;
    actions: TXActions;
}

export class TXDetailsComponent extends React.Component <IProps> {
    componentDidMount () {
        this.props.actions.getTXByHash(this.props.match.params.hash);
    }

    render () {
        const {tx} = this.props;
        if (!tx) return null;

        return (
            <Row>
                <div className="row">
                    <div className="col-md-8 col-lg-6">
                        <Table>
                            <tbody>
                                <tr>
                                    <th>Size</th>
                                    <td>{tx.size}(bytes)</td>
                                </tr>
                                <tr>
                                    <th>weight</th>
                                    <td>{tx.weight}</td>
                                </tr>
                                <tr>
                                    <th>Received Time</th>
                                    <td>{ tx.time && moment(tx.time*1000).format('dddd, MMMM Do YYYY, h:mm:ss a (UTC Z)')}</td>
                                </tr>
                                <tr>
                                    <th>Included In Blocks</th>
                                    <td><Link to={`/blocks/${tx.block_height}`}>{tx.block_height}</Link></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Row>
        )
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        tx: state.txDetails.data
    }
}


const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => ({
    actions: new TXActions(new TXService(), dispatch)
})

export const TXDetails = withRouter(connect(mapStateToProps, mapDispatchToProps)(TXDetailsComponent));