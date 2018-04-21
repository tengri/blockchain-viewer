import * as React from 'react';
import {BlockDetails} from '../Componens/BlockDetails';
/**
 * Страница блока
 */
export const BlockDetailsPage = () => {
    return (
        <div>
            <h1>Block Details</h1>

            {/* информацию про блок */}
            <BlockDetails/>

            {/* список хранящихся в блоке транзакций */}


        </div>
    )
}