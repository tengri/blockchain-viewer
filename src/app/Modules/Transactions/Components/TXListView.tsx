import * as React from 'react';
import {Table} from 'react-bootstrap';
import {ITXView} from "../../../Models";
import isEmpty = require("lodash/fp/isEmpty");

interface IProps {
    txs: ITXView[];
}

export const TXListView = ({txs}: IProps) => {
    if (isEmpty(txs)) return null;

    return (
        <Table>
            <thead>
            <tr>
                <th>Hash</th>
                <th>Value Out</th>
            </tr>
            </thead>
            <tbody>

            {
                txs.map((tx: ITXView) => (
                    <tr key={tx.hash}>
                        <td>{tx.hash}</td>
                        <td>{tx.out.reduce((total, out) => (total + out.value)/1000000, 0)}</td>
                    </tr>
                ))

            }

            </tbody>
        </Table>
    )
}
