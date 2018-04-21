import * as React from 'react';
import {PageHeader} from "react-bootstrap";
import {BlockList} from '../Componens/BlockList';

/**
 * Страница со списком блоков
 */
export class BlockListPage extends React.Component {
    render () {
        return (
            <div>
                <PageHeader>
                    Blocks <small>by date</small>
                </PageHeader>

                <BlockList />
            </div>
        )
    }
}