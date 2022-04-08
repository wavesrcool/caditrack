import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import * as React from 'react'
import FooterOne from '../../modules/features/footer_one/FooterOne'
import NavigationTwo from '../../modules/features/navigation_two/NavigationTwo'

const PrivacyOrigin: React.FC = () => {
  console.log(`*functional* PrivacyOrigin`)

  const { t } = useTranslation([`common`])

  return (
    <div>
      <NavigationTwo />
      <Box sx={{ height: `700px`, py: 3, px: 8 }}>
        <Typography variant="h2" mb={8}>{`${t(
          `privacy.heading`
        )}.`}</Typography>

        <Typography variant="h3">{`${t(`privacy.message`)}`}</Typography>
      </Box>
      <FooterOne />
    </div>
  )
}

export default PrivacyOrigin
