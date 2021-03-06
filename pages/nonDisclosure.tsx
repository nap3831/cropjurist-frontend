import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import NonDisclosureManagerContainer from '../components/NonDisclosureManager/NonDisclosureManagerContainer'
import NonDisclosureContainer from '../components/nonDisclosureComponent/NonDisclosureContainer'
const nonDisclosure = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="mb-3">
        <NonDisclosureManagerContainer>
          <NonDisclosureContainer />
        </NonDisclosureManagerContainer>
      </div>
    </MainLayoutMember>
  )
}

export default nonDisclosure
