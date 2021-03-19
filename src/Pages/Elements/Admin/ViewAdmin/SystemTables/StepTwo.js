import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
// Import
import ViewNominalCodes from './StepTwo/NominalCodes';
import ViewOffice from './StepTwo/Office';
import ViewNegotiator from './StepTwo/Negotiator';
import ViewBankAccount from './StepTwo/BankAccounts';
import Utilities from './StepTwo/Utilities';
import ViewManagers from './StepTwo/Managers';
import EmailMessages from './StepTwo/EmailMessages';
import LogAndDiary from './StepTwo/LogAndDiary';

export default class ViewStepTwo extends React.Component {
    constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			SubCostCenter:'',MainCostCenter:''
		}
	}

	componentDidMount(){
		this._isMounted = true;
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/DataBaseParameterList',{
				method: 'POST',
				headers: { 
				'Authorization':'Bearer'+' '+ token,
				'Content-Type': 'application/json',
				'Accept':'application/json',
				},
				body:JSON.stringify({
					wstoken: 'jwtToken',
					wsfunction: 'any_function',
					moodlewsrestformat: 'json',
					groups : 'label',
				})
			})
			.then((response)=>{
				return response.json();
			})
			.then((data) => {
			if (this._isMounted) {
				this.setState({
					SubCostCenter  : data.body[3].Codes,
					MainCostCenter : data.body[4].Codes,
				})
			}
        })
    }
    render() {
        const tabsContent = [
            {
                title: 'Nominal Codes',
                content: <ViewNominalCodes/>
            },
            {
                title: this.state.MainCostCenter,
                content: <ViewOffice/>
            },
            {
                title: this.state.SubCostCenter,
                content: <ViewNegotiator/>
            },
            {
                title: 'Bank Accounts',
                content: <ViewBankAccount/>
            },
            {
                title: 'Utilities',
                content: <Utilities/>
            },
            {
                title: 'Managers',
                content: <ViewManagers/>
            },
            {
                title: 'Email Messages',
                content: <EmailMessages/>
            },
            {
                title: 'Log and Diary',
                content: <LogAndDiary/>
            },
        ];
        function getTabs() {
            return tabsContent.map((tab, index) => ({
                title: tab.title,
                getContent: () => tab.content,
                key: index,
            }));
        }
	    return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}