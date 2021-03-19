import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
import Register from './Registeruser/RegisterUser';
const tabsContent = [
    {
        title: 'Tab 1',
        content: <Register/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class RegisterUser extends React.Component {
    render() {
	    return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout hidden" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}