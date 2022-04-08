import * as React from 'react'
import { Theme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { useTranslation } from 'next-i18next'
import MainPresentationOneTypography from '../main_presentation_one/components/MainPresentationOneTypography'

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
  opacity: 0.78,
}

function MainPresentationTwo() {
  const { t } = useTranslation([`common`])

  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '' }}
    >
      <Container sx={{ mt: 10, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/images/background/main_presentation_one_lines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Box sx={item}>
              <Box>[CadiTrack logo]</Box>
              <MainPresentationOneTypography variant="h5" pt={4}>
                {`${t(`copy_primary.one`)}.`}
              </MainPresentationOneTypography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MainPresentationTwo
