import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { withTranslation, i18n } from '../../i18n'
import { SiginPresenter, SigninItem } from './SigninInterfaces'
import { signin, SigninAction } from '../../apis/signinAPIClient'
import { Dispatch } from 'redux'
import { FormManager } from '../../manager/formManager'
import { routerToPageTableEditNonDisclosure } from '../../manager/routerManager'
import validate from '../../validate/signinValidator/signinValidator'
import Signin from './Signin'
import Router from 'next/router'

const signinItem: SigninItem = {
  keySigninLabelUsername: 'labelUsername',
  keySigninPlaceholderUsername: 'labelUsername',
  keySigninLabelPassword: 'labelPassword',
  keySigninPlaceholderPassword: 'labelPassword',
  keyRemember: 'remember',
  keyForgotPassword: 'forgotPassword',
  keySigninSubmit: 'signinSubmit',
  keySignupAccount: 'signupAccount',
  keySignupButton: 'signup',
  keyimagePath: 'assets/images/signin/signin-img.jpg'
}

const signinPresenter: SiginPresenter = {
  keySigninHeader: 'signin',
  signinItem: signinItem,
  isLoadFinished: 0
}
let resetLoad = 0
export const signinReducer = (state: SiginPresenter = signinPresenter, action: any) => {
  switch (action.type) {
    case SigninAction.Progress:
      resetLoad = 0
      resetLoad = action.isLoadFinished
      return {
        ...state,
        isLoadFinished: resetLoad
      }

    case SigninAction.Signin_Success:
      Router.replace(routerToPageTableEditNonDisclosure)
      return state

    case SigninAction.Signin_Failed:
      alert(i18n.t(action.keyMessage))
      return state
    default:
      return state
  }
}

const mapStateToProps = (state: any) => ({
  signinPresenter: state.signinReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submitSignin: (event: any) => {
    dispatch(signin(event.email, event.password, event.checkbox))
    dispatch(reset(FormManager.SigninForm))
  }
})

const form = reduxForm({ form: FormManager.SigninForm, validate })(Signin)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
