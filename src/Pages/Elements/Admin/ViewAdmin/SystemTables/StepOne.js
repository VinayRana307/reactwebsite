import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
// Import
import ViewBanks from './StepOne/Banks';
import ViewPropertyType from './StepOne/PropertyType';
import ViewPropertyStatus from './StepOne/PropertyStatus';
import ViewLocations from './StepOne/Locations';
import ViewLeaseTypes from './StepOne/TenantLeaseTypes';
import ViewVatRates from './StepOne/VatRates';
import Testcertificates from './StepOne/Testcertificates';
const tabsContent = [
    {
        title: 'Banks',
        content: <ViewBanks/>
    },
	{
        title: 'Property Type',
        content: <ViewPropertyType/>
    },
	{
        title: 'Property Status',
        content: <ViewPropertyStatus/>
    },
	{
        title: 'Locations',
        content: <ViewLocations/>
    },
	{
        title: 'Tenant Lease Types',
        content: <ViewLeaseTypes/>
    },
	{
        title: 'VAT Rates',
        content: <ViewVatRates/>
    },
    {
        title: 'Test Certificates',
        content: <Testcertificates/>
    },
];
function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}
export default class ViewStepOne extends React.Component {
    render() {
	    return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}