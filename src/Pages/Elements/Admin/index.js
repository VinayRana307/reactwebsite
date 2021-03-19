import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
// Import
import SystemTables from './ViewAdmin/SystemTables';
import DBParameters from './ViewAdmin/DBParameters';
import SystemSettings from './ViewAdmin/SystemSettings';
import AdminUsers from './ViewAdmin/Users';
import DeleteAdmin from './ViewAdmin/DeleteAdmin';
import SuspendReinstate from './ViewAdmin/SuspendReinstate';
import Utilities from './ViewAdmin/Utilities';
import ViewSecurity from './ViewAdmin/Security';
const tabsContent = [
    {
        title: 'System Tables',
        content: <SystemTables/>
    },
	{
        title: 'DB Parameters',
        content: <DBParameters/>
    },
	{
        title: 'System Settings',
        content: <SystemSettings/>
    },
	{
        title: 'Users',
        content: <AdminUsers/>
    },
	{
        title: 'Delete',
        content: <DeleteAdmin/>
    },
	{
        title: 'Suspend/Reinstate',
        content: <SuspendReinstate/>
    },
	{
        title: 'Utilities',
        content: <Utilities/>
    },
	{
        title: 'Security',
        content: <ViewSecurity/>
    },
];
function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}
export default class ViewAdmin extends React.Component {
    render() {
	    return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}