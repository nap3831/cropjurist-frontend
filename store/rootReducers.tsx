import { combineReducers } from "redux";
import { navigationReducer } from "../components/Navigation/NavigationContainer";
import { sectionReducer } from "../components/Section/SectionContainer";
import { listViewReducer } from "../components/ListView/ListViewContainer";
import { footerReducer } from "../components/Footer/FooterViewContainer";
import { sectionIncorporationReducer } from "../components/Section/SectionIncorporationContainer";
import { servicesReducer } from "../components/Services/ServicesContainer";
import { signinReducer } from "../components/Signin/SigninContainer";
import { signupReducer } from "../components/Signup/SignupContainer";

const rootReducers = combineReducers({
  navigationReducer: navigationReducer,
  sectionReducer: sectionReducer,
  listViewReducer: listViewReducer,
  footerReducer: footerReducer,
  sectionIncorporationReducer: sectionIncorporationReducer,
  servicesReducer: servicesReducer,
  signinReducer: signinReducer,
  signupReducer: signupReducer
});

export default rootReducers;
