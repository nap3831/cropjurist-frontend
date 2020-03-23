import Link from "next/link";
import { withTranslation } from "../../i18n";

const Signin = ({ signinPresenter, t }: any) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-8">
          <h2 className="text-center mb-3">
            {t(signinPresenter.keySigninHeader)}
          </h2>
          <form id="contact-form" method="post">
            <div className="messages"></div>
            <div className="form-group">
              <label>
                {t(signinPresenter.signinItem.keySigninLabelUsername)}
              </label>
              <input
                type="text"
                className="form-control"
                placeholder={t(
                  signinPresenter.signinItem.keySigninPlaceholderUsername
                )}
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <label>
                {t(signinPresenter.signinItem.keySigninLabelPassword)}
              </label>
              <input
                type="password"
                className="form-control"
                placeholder={t(
                  signinPresenter.signinItem.keySigninPlaceholderPassword
                )}
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group mt-4 mb-5">
              <div className="remember-checkbox d-flex flex-wrap align-items-center justify-content-between">
                <div className="checkbox">
                  <input type="checkbox" id="check2" name="check2" />
                  <label className="pl-1" htmlFor="check2">
                    {t(signinPresenter.signinItem.keyRemember)}
                  </label>
                </div>
                <a href="#">
                  {t(signinPresenter.signinItem.keyForgotPassword)}
                </a>
              </div>
            </div>{" "}
            <button type="submit" className="btn btn-primary btn-block">
              {t(signinPresenter.signinItem.keySigninSubmit)}
            </button>
          </form>
          <div className="d-flex align-items-center flex-wrap text-center justify-content-center mt-4">
            <span className="text-muted mr-1">
              {t(signinPresenter.signinItem.keySignupAccount)}
            </span>
            <Link href="/signup">
              {t(signinPresenter.signinItem.keySignupButton)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation("common")(Signin);
