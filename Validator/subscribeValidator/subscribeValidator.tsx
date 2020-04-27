import { FormErrors } from 'redux-form';
import { ErrorField } from '../interfaceValidator';
import { emailValidator } from '../emailValidator/emailValidator';

const validate = (subscribeInformation, { t }: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};

	let emailValidatorResult = emailValidator(subscribeInformation.email);

	if (!emailValidatorResult.status) {
		errors.email = t(emailValidatorResult.keyMessage);
	}

	return errors;
};

export default validate;