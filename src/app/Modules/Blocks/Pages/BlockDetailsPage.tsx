import * as React from 'react';
import {BlockDetails} from '../Componens/BlockDetails';
/**
 * Страница блока
 */
export const BlockDetailsPage = () => {
    return (
        <div>
            <h3>Block Details</h3>

            {/* информацию про блок */}
            <BlockDetails/>

            {/* список хранящихся в блоке транзакций */}


        </div>
    )
}