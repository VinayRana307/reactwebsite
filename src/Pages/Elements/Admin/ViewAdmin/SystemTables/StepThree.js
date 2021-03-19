import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
// Import
import ViewFixedCodes from './StepThree/FixedCodes';
import ViewFooters from './StepThree/Footer';
import ViewRepairOrder from './StepThree/RepairOrders';
import ViewUserLabel from './StepThree/UserLabels';
const tabsContent = [
    {
        title: 'Fixed Codes',
        content: <ViewFixedCodes/>
    },
	{
        title: 'Footers',
        content: <ViewFooters/>
    },
	{
        title: 'Repair Order',
        content: <ViewRepairOrder/>
    },
	{
        title: 'User Labels',
        content: <ViewUserLabel/>
    },
];
function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}
export default class ViewStepThree extends React.Component {
    render() {
	    return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}