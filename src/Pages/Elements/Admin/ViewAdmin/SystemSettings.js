import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
import PageTitle from '../../../../Layout/AppMain/PageTitle';
// Import
import ViewSettings from './SystemSettings/Settings';
import ViewNominals from './SystemSettings/Nominals';
import ViewFlags from './SystemSettings/Flags';
import ViewDefaults from './SystemSettings/Default';
import ViewStatements from './SystemSettings/Statements';
import OwnDetails from './SystemSettings/OwnDetails';
import ViewReports from './SystemSettings/Reports';
import ViewRemittance from './SystemSettings/Remittance';
import ViewDemandNotice from './SystemSettings/DemandNotices';
import ViewLogCodes from './SystemSettings/LogCodes';
const tabsContent = [
	{
        title: 'Settings',
        content: <ViewSettings/>
    },
	{
        title: 'Nominals',
        content: <ViewNominals/>
    },
	{
        title: 'Flags',
        content: <ViewFlags/>
    },
	{
        title: 'Default',
        content: <ViewDefaults/>
    },
	{
        title: 'Statements',
        content: <ViewStatements/>
    },
	{
        title: 'Own Details',
        content: <OwnDetails/>
    },
	{
        title: 'Reports',
        content: <ViewReports/>
    },
	{
        title: 'Remittance',
        content: <ViewRemittance/>
    },
	{
        title: 'Demand Notices',
        content: <ViewDemandNotice/>
    },
	{
        title: 'Log Codes',
        content: <ViewLogCodes/>
    },
];
function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}
export default class SystemSettings extends React.Component {
    render() {
	    return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}