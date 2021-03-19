import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
import PropertyListing from './DeleteClient/Property';
import ClientListing from './DeleteClient/Client';
import TenantListing from './DeleteClient/Tenant';
import SupplierListing from './DeleteClient/Supplier';
const tabsContent = [
	{
        title: 'Client',
        content: <ClientListing/>
    },
	{
        title: 'Property',
        content: <PropertyListing/>
    },
	 {
        title: 'Tenant',
        content: <TenantListing/>
    },
	{
        title: 'Supplier',
        content: <SupplierListing/>
    },
];
function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}
export default class DeleteAdmin extends React.Component {
    render() {
	    return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>	
            </Fragment>
        );
    }
}