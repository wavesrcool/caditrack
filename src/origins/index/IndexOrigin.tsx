import * as React from 'react'
import FooterOne from '../../modules/features/footer_one/FooterOne'
import MainHero from '../../modules/features/main_hero/MainHero'
import MainPresentationContact from '../../modules/features/main_presentation_contact/MainPresentationContact'
import MainPresentationDetails from '../../modules/features/main_presentation_details/MainPresentationDetails'
import MainPresentationOne from '../../modules/features/main_presentation_one/MainPresentationOne'
import MainPresentationTwo from '../../modules/features/main_presentation_two/MainPresentationTwo'
import NavigationTwo from '../../modules/features/navigation_two/NavigationTwo'

const IndexOrigin: React.FC = () => {
  console.log(`*functional* IndexOrigin`)

  return (
    <>
      <NavigationTwo />

      <MainHero />

      <MainPresentationOne />

      <MainPresentationDetails />

      <MainPresentationTwo />

      <MainPresentationContact />

      <FooterOne />
    </>
  )
}

export default IndexOrigin

//       <MainPresentationCall />
