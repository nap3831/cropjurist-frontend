import { connect } from 'react-redux'
import { withTranslation } from '../../i18n'
import {
  NonDisclosurePresenter,
  DisclosureDialog,
  KeyDialogDetail,
  LinkItems,
  DisclosureItems
} from './nonDisclosureManagerInterface'
import { KeyManager } from '../../manager/keyManager'
import { routeToPageNonDisclosure } from '../../manager/routerManager'
import nonDisclosureManager from './nonDisclosureManager'

const linkItems: LinkItems[] = [
  { keyTitlePath: KeyManager.DisclosureLink, routePath: routeToPageNonDisclosure }

]
const disclosureItems: DisclosureItems = {
  linkItems: linkItems
}

const keyDialogDetail: KeyDialogDetail[] = [
  {
    dialogDetail: KeyManager.DialogDetailDisclosure
  }
]

const disclosureDialog: DisclosureDialog[] = [
  {
    keyPathUsedDailog: 'nonDisclosure',
    keyDialogTitle: KeyManager.DisclosureLink,
    keyDialogDetail: keyDialogDetail,
    keyCloseTab: 'close'
  }

]

const nonDisclosurePresenter: NonDisclosurePresenter = {
  keyDisclosureTitle: KeyManager.DiscloreTitlePage,
  disclosureItems: disclosureItems,
  disclosureDialog: disclosureDialog
}

export const nonDisclosureManagerReducer = (state: NonDisclosurePresenter = nonDisclosurePresenter) => {
  return state
}

const mapStateToProps = (state: any) => ({
  nonDisclosurePresenter: state.nonDisclosureManagerReducer
})

export default withTranslation('common')(connect(mapStateToProps)(nonDisclosureManager))