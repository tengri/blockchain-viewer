import * as React from 'react';
import {Table} from 'react-bootstrap';
import {ITXListItem} from "../../../Models";
import isEmpty = require("lodash/fp/isEmpty");
import {Link} from "react-router-dom";

interface IProps {
    txs: ITXListItem[];
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
                txs.map((tx: ITXListItem) => (
                    <tr key={tx.hash}>
                        <td>
                            <Link to={'tx/' + tx.hash}>
                                {tx.hash}
                            </Link>
                        </td>
                        <td>{tx.out.reduce((total, out) => (total + out.value)/1000000, 0)} BTC</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    )
}
