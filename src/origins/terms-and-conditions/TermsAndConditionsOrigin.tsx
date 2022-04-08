import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import * as React from 'react'
import FooterOne from '../../modules/features/footer_one/FooterOne'
import NavigationTwo from '../../modules/features/navigation_two/NavigationTwo'

const TermsAndConditionsOrigin: React.FC = () => {
  console.log(`*functional* TermsAndConditionsOrigin`)

  const { t } = useTranslation([`common`])

  return (
    <div>
      <NavigationTwo />
      <Box sx={{ height: `700px`, py: 3, px: 8 }}>
        <Typography variant="h2" mb={8}>{`${t(
          `terms-and-conditions.heading`
        )}.`}</Typography>

        <Typography variant="h3">{`${t(
          `terms-and-conditions.message`
        )}`}</Typography>
      </Box>
      <FooterOne />
    </div>
  )
}

export default TermsAndConditionsOrigin
