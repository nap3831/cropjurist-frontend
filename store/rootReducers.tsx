import { combineReducers } from 'redux';
import { navigationReducer } from '../components/Navigation/NavigationContainer';
import { sectionReducer } from '../components/Section/SectionContainer';
import { listViewReducer } from '../components/ListView/ListViewContainer';
import { footerReducer } from '../components/Footer/FooterViewContainer';
import { sectionIncorporationReducer } from '../components/Section/SectionIncorporationContainer';
import { servicesReducer } from '../components/Services/ServicesContainer';
import { signinReducer } from '../components/Signin/SigninContainer';
import { signupReducer } from '../components/Signup/SignupContainer';
import { forgotPasswordReducer } from '../components/ForgotPassword/ForgotPasswordContainer';
import {navigationIncorporationReducer} from '../components/Navigation/NavigationIncorporationContainer';
import { inCorporationManagerReducer } from '../components/IncorporationManager/IncorporationManagerContainer';
import { companyInformationReducer } from '../components/CompanyComponent/CompanyInformationContainer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducers = combineReducers({
	navigationReducer: navigationReducer,
	sectionReducer: sectionReducer,
	listViewReducer: listViewReducer,
	footerReducer: footerReducer,
	sectionIncorporationReducer: sectionIncorporationReducer,
	servicesReducer: servicesReducer,
	signinReducer: signinReducer,
	signupReducer: signupReducer,
	forgotPasswordReducer: forgotPasswordReducer,
	inCorporationManagerReducer: inCorporationManagerReducer,
	companyInformationReducer: companyInformationReducer,
	navigationIncorporationReducer: navigationIncorporationReducer,
	form: reduxFormReducer
});

export default rootReducers;