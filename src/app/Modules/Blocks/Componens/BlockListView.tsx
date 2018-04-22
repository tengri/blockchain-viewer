import * as React from 'react';
import {Table} from 'react-bootstrap';
import {IBlockListItem} from "../../../Models";
import moment = require("moment");
import {Link} from "react-router-dom";

export const BlockListView = (props: {blocks: IBlockListItem[]}) => {
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
                        props.blocks.map((block: IBlockListItem) => (
                            <tr key={block.height}>
                                <td><Link to={`/blocks/${block.height}`}>{block.height}</Link></td>
                                <th>{block.hash}</th>
                                <td>{moment.unix(block.time).format("dddd, MMMM Do YYYY, h:mm:ss a (UTC Z)")}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}
