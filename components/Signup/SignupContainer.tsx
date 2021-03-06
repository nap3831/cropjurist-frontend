import { reduxForm, reset } from 'redux-form';
import { SignupPresenter, SingupItemsInputform } from '../Signup/SignupInterface';
import { connect } from 'react-redux';
import { withTranslation, i18n } from '../../i18n';
import { FormManager } from '../../manager/formManager';
import { signup, SignupAction } from '../../apis/signupAPIClient';
import { Dispatch } from 'redux';
import Signup from '../Signup/Signup';
import Router from 'next/router';
import { routeToSignin } from '../../manager/routerManager';
import validate from '../../validate/signupValidator/signupValidator';

const signupItemsInputform: SingupItemsInputform = {
	keyPlaceholderFirstNameSignup: 'placeholderFirstNameSignup',
	keyPlaceholderLastNameSignup: 'placeholderLastNameSignup',
	keyPlaceholderEmailSignup: 'placeholderEmailSignup',
	keyPlaceholderReEnterEmailSignup: 'placeholderReEnterEmailSignup',
	keyPlaceholderPasswordSignup: 'labelPassword',
	keyPlaceholderConfirmPasswordSignup: 'placeholderConfirmPasswordSignup',
	keySubmitSignup: 'submitSignup',
	keyHaveAccount: 'haveAccount',
	keySigninAccount: 'signinAccount',
	keyimagePath: 'assets/images/signup/signup-img.jpg'
};

const signupPresenter: SignupPresenter = {
	keySignupHeader: 'signup',
	signupItemInputform: signupItemsInputform
};

export const signupReducer = (state: SignupPresenter = signupPresenter, action: any) => {
	switch (action.type) {
		case SignupAction.Signup_Success:
			alert(i18n.t(action.keyMessage));
			Router.push(routeToSignin);
		case SignupAction.Signup_Failed:
		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	signupPresenter: state.signupReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	submitSignup: (event: any) => {
		dispatch(signup(event.firstName, event.lastName, event.email, event.password));
		dispatch(reset(FormManager.SignupForm));
	}
});

const form = reduxForm({ form: FormManager.SignupForm, validate })(Signup);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));