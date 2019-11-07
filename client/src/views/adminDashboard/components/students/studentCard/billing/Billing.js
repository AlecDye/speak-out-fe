import React from 'react';
import Invoices from './Invoices';
import Receipts from './Receipts'
import { Tab } from 'semantic-ui-react';

const Billing = props => {
    
    const panes = [
        {
            menuItem: 'Invoices',
            render: () => <Tab.Pane attached={false}>{<Invoices />}</Tab.Pane>,
        },
        {
            menuItem: 'Receipts',
            render: () => <Tab.Pane attached={false}>{<Receipts />}</Tab.Pane>,
        }
    ]
    return (
        <>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </>
    )
}

export default Billing;