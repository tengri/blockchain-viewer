import * as React from 'react';
import {Table} from 'react-bootstrap';
import {IBlockView} from "../../../Models";
import moment = require("moment");

export const BlockListView = (props: {blocks: IBlockView[]}) => {
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
                        props.blocks.map((block: IBlockView) => (
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
