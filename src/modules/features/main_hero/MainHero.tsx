/* eslint-disable @next/next/no-img-element */
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'
import * as React from 'react'
import { NextLinkComposed } from '../../../lib/components/next/Link'
import MainHeroLayout from './components/MainHeroLayout'
import { BsCalendar2Check } from 'react-icons/bs'
import { Box, Stack } from '@mui/material'

const backgroundImage = '/images/heroes/main/example_hero_1.png'

const MainHero: React.FC = () => {
  console.log(`*functional* MainHero`)

  const { t } = useTranslation([`common`])

  return (
    <MainHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />

      <Typography
        color="inherit"
        align="center"
        variant="h1"
        fontWeight={600}
        mt={16}
      >
        {`${t(`common:glossary.phrases.lot_tracking_made_easy`)}`}
      </Typography>

      <Button
        component={NextLinkComposed}
        to={{
          pathname: '/how-it-works',
        }}
        color="warning"
        variant="contained"
        size="large"
        sx={{ minWidth: 200, mt: 16 }}
      >
        {`${t(`common:glossary.compound.see_more`)}`}
      </Button>

      <Stack direction={`row`} pt={12}>
        <Typography variant="h6" color="inherit" sx={{ mt: 2 }}>
          {`${t(`common:glossary.phrases.your_end_to_end_traceability`)}`}
        </Typography>
        <Box mt={2} ml={2}>
          <BsCalendar2Check size={24} />
        </Box>
      </Stack>
    </MainHeroLayout>
  )
}

export default MainHero
