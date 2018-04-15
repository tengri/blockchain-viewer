import * as React from 'react';
import {Table} from 'react-bootstrap';
import {IBlock} from "../../../Models";

export const BlockList = (props: {blocks: IBlock[]}) => {
    {
        return (
            <div>
                <h1>Latest Blocks</h1>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Height</th>
                        <th>Hash</th>
                        <th>time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.blocks.map((block: IBlock) => (
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
