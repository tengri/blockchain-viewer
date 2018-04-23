import {Pager} from "react-bootstrap";
import * as React from "react";
import {ITXListItem} from "../../../Models";
import {TXListView} from "../../Transactions/Components/TXListView";

interface IProps {
    txs: ITXListItem[];
}

interface IState {
    page: number;
}

export class TXPagination extends React.Component<IProps, IState> {
    state = {page: 1}

    toPrevPage = () => {
        this.setState({page: --this.state.page})
    }

    toNextPage = () => {
        this.setState({page: ++this.state.page})

    }

    render () {
        const {page} = this.state;
        return (
            <div>
                <TXListView txs={this.props.txs.slice((page-1)*10, page*10)}/>
                <Pager>
                    <Pager.Item onClick={this.toPrevPage}>Previous</Pager.Item>
                    <Pager.Item onClick={this.toNextPage}>Next</Pager.Item>
                </Pager>
            </div>
        )
    }
}