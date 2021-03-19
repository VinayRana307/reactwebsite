import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
// Import
import ViewClient from './SuspendReinstate/Clients';
import ViewProperty from './SuspendReinstate/Property';
import ViewTenant from './SuspendReinstate/Tenants';
import ViewSupplier from './SuspendReinstate/Supplier';
const tabsContent = [
    {
        title: 'Client',
        content: <ViewClient/>
    },
	{
        title: 'Property',
        content: <ViewProperty/>
    },
	{
        title: 'Tenant',
        content: <ViewTenant/>
	},
	{
        title: 'Supplier',
        content: <ViewSupplier/>
    },
];
function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}
export default class SystemTables extends React.Component {
    render() {
	    return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}