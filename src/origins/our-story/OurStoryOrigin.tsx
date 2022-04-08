import * as React from 'react'
import * as MUI from '@mui/material'

import FooterOne from '../../modules/features/footer_one/FooterOne'
import NavigationTwo from '../../modules/features/navigation_two/NavigationTwo'
import { grey } from '@mui/material/colors'
import { useTranslation } from 'next-i18next'
import { GlobalHeading } from '../../modules/components/GlobalHeading'

const OurStoryOrigin: React.FC = () => {
  console.log(`*functional* OurStoryOrigin`)

  const { t } = useTranslation([`common`])

  return (
    <div>
      <NavigationTwo />

      <MUI.Box mt={4}>
        <GlobalHeading>{`${t(
          `navigation.routes.our_story.name`
        )}`}</GlobalHeading>
      </MUI.Box>

      <MUI.Container sx={{ mt: 2, backgroundColor: grey[50] }}>
        <MUI.Box sx={{ flexGrow: 1 }}>
          <MUI.Box
            component="img"
            src="/images/caditrack/group.jpeg"
            alt="group"
            sx={{
              width: `100%`,
            }}
          />

          <MUI.Stack direction={`column`} spacing={2} mt={4}>
            <MUI.Typography>{`${t(`our_story.content1`)}`}</MUI.Typography>

            <MUI.Typography>{`${t(`our_story.content2`)}`}</MUI.Typography>

            <MUI.Typography>{`${t(`our_story.content3`)}`}</MUI.Typography>

            <MUI.Typography>{`${t(`our_story.content4`)}`}</MUI.Typography>
          </MUI.Stack>
        </MUI.Box>
      </MUI.Container>
      <FooterOne />
    </div>
  )
}

export default OurStoryOrigin
/*

   <Image
            //src="/images/caditrack/lovena.jpg"
            src={img}
            //sizes="80 640 750"
            //sizes="180"
            layout="responsive"
            alt="lovena"
          />

          */
