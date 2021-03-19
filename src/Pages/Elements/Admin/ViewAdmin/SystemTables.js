import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
// Import
import ViewStepOne from './SystemTables/StepOne';
import ViewStepTwo from './SystemTables/StepTwo';
import ViewStepThree from './SystemTables/StepThree';
const tabsContent = [
    {
        title: 'Step One',
        content: <ViewStepOne/>
    },
	{
        title: 'Step Two',
        content: <ViewStepTwo/>
    },
	{
        title: 'Step Three',
        content: <ViewStepThree/>
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