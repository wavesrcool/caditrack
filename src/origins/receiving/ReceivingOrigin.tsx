import { Box, Container, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useTranslation } from 'next-i18next'
import * as React from 'react'
import { GlobalHeading } from '../../modules/components/GlobalHeading'
import FooterOne from '../../modules/features/footer_one/FooterOne'
import NavigationTwo from '../../modules/features/navigation_two/NavigationTwo'

const ReceivingOrigin: React.FC = () => {
  console.log(`*functional* ReceivingOrigin`)

  const { t } = useTranslation([`common`])

  return (
    <div>
      <NavigationTwo />
      <Container sx={{ mt: 10, backgroundColor: grey[50], pt: 2, pb: 12 }}>
        <Box mt={8} px={8}>
          <GlobalHeading>{`${t(`phases.rx`)}`}</GlobalHeading>
        </Box>

        <Stack pt={4} px={8}>
          <Typography>{t(`how_it_works.pages.rx.content1`)}:</Typography>

          <Stack px={8} py={2}>
            <Typography>
              &bull; {t(`how_it_works.pages.bullets.bullet1`)}
            </Typography>

            <Typography>
              &bull;
              {` ${t(`phases.rx`)} ${t(`glossary.simple.date`).toLowerCase()}`}
            </Typography>

            <Typography>
              &bull; {t(`how_it_works.pages.bullets.bullet3`)}
            </Typography>

            <Typography>
              &bull; {t(`how_it_works.pages.bullets.bullet4`)}
            </Typography>

            <Typography>
              &bull; {t(`how_it_works.pages.bullets.bullet-rx`)}
            </Typography>
          </Stack>

          <Typography pt={2}>{t(`how_it_works.pages.rx.content2`)}.</Typography>
        </Stack>
      </Container>
      <FooterOne />
    </div>
  )
}

export default ReceivingOrigin
