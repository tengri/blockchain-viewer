import * as React from 'react';
import {TXDetails} from "../Components/TXDetails";
import {PageHeader} from "react-bootstrap";

/**
 * Страница транзакции со всей доступной о ней информацией.
 */
export const TXDetailsPage = () => (
    <div>
        <PageHeader>
            Transaction <small>View information about a bitcoin transaction</small>
        </PageHeader>
        <TXDetails/>
    </div>
);