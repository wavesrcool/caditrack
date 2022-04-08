import * as React from 'react'
import FooterOne from '../../modules/features/footer_one/FooterOne'
import NavigationTwo from '../../modules/features/navigation_two/NavigationTwo'

const LicenseOrigin: React.FC = () => {
  console.log(`*functional* LicenseOrigin`)

  return (
    <div>
      <NavigationTwo />
      <FooterOne />
    </div>
  )
}

export default LicenseOrigin
