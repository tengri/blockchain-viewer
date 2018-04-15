import * as React from 'react';
import {PageHeader} from "react-bootstrap";
import {BlockListWidget} from '../Componens/BlockListWidget';

export class BlockListPage extends React.Component {
    render () {
        return (
            <div>

                <PageHeader>
                    Blocks <small>by date</small>
                </PageHeader>

                <BlockListWidget />
            </div>
        )
    }
}