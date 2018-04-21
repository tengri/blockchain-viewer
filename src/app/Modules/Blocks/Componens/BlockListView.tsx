import * as React from 'react';
import {Table} from 'react-bootstrap';
import {IBlock} from "../../../Models";
import moment = require("moment");

export const BlockListView = (props: {blocks: IBlock[]}) => {
    {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Height</th>
                            <th>Hash</th>
                            <th>time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.blocks.map((block: IBlock) => (
                            <tr key={block.height}>
                                <td>{block.height}</td>
                                <th>{block.hash}</th>
                                <td>{moment.unix(block.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}
