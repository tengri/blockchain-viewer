import * as React from 'react';
import {Table} from 'react-bootstrap';

export class TXListView extends React.Component {
    render () {
        return (
            <div>
                <h1>Latest Transactions</h1>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Height</th>
                        <th>Hash</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Otto</td>
                        <th>Hash</th>
                        <td>@mdo</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
