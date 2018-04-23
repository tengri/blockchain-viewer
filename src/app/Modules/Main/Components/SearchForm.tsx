import * as React from "react";
import {FormGroup,FormControl, Button} from "react-bootstrap";
import { LinkContainer} from 'react-router-bootstrap';
import {MainService} from "../MainService";
import {BlockService} from "../../Blocks/BlockService";
import {TXService} from "../../Transactions/TXService";
import {IAppState, IBlockDetails, ITXDetails} from "../../../Models";
import {connect, Dispatch} from "react-redux";
import {MainActions} from "../MainActions";
import {Redirect, RouteComponentProps, withRouter} from "react-router";

interface IProps extends RouteComponentProps<void> {
    actions: MainActions;
    tx: ITXDetails;
    block: IBlockDetails;
}

interface IState {
    value: string;
}

class SearchFormComponent extends React.Component<IProps, IState> {
    state = {
        value: ''
    }

    handleChange = (e: any) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = () => {
        this.props.actions.searchByHash(this.state.value);
    }

    componentWillUnmount () {
        this.props.actions.resetForm();
    }

    render () {
        const {block, tx} = this.props;
        return (
            <div>
                {
                    block && <Redirect to={`/blocks/${block.hash}`}/>
                }

                {
                    tx && <Redirect to={`/tx/${tx.hash}`}/>
                }
                <form>
                    <h3>SEARCH</h3>
                    <span>
                    You may enter a block hash or transaction hash
                </span>
                    <FormGroup>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="button" bsStyle="primary" onClick={this.handleSubmit}>search</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state: IAppState) => (
    {
        tx: state.main.search.data.tx,
        block: state.main.search.data.block
    }
)

const mapDispatchToProps = function(dispatch: Dispatch<IAppState>) {
    return {
        actions: new MainActions(new MainService(), new BlockService(), new TXService(), dispatch)
    }
}

export const SearchForm = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent));