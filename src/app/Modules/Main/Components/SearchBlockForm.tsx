import * as React from "react";
import {ControlLabel, FormGroup,FormControl, Button} from "react-bootstrap";
import { LinkContainer} from 'react-router-bootstrap';

interface IProps {

}

interface IState {
    value: string;
}

export class SearchBlockForm extends React.Component<IProps, IState> {
    state = {
        value: ''
    }

    handleChange = (e: any) => {
        this.setState({value: e.target.value})
    }

    render () {
        return (
            <form>
                <h3>SEARCH</h3>
                <span>
                    You may enter a block height, address, block height, transaction hash
                </span>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <LinkContainer to="/search">
                        <Button type="button">search</Button>
                    </LinkContainer>
                </FormGroup>
            </form>
        )
    }
}