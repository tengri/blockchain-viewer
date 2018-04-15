import * as React from 'react';
import {Table} from 'react-bootstrap';
import {IBlock} from "../../../Models";

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
                            <tr>
                                <td>{block.height}</td>
                                <th>{block.hash}</th>
                                <td>{block.time}</td>
                            </tr>
                        ))

                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}
