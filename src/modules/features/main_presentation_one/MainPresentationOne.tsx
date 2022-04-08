import * as React from 'react'
import { Theme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import MainPresentationOneTypography from './components/MainPresentationOneTypography'
import { useTranslation } from 'next-i18next'
import {
  BsBookmarkStar,
  BsReverseLayoutTextSidebarReverse,
  BsTags,
} from 'react-icons/bs'

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
  opacity: 0.78,
}

function MainPresentationOne() {
  const { t } = useTranslation([`common`])

  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/images/background/main_presentation_one_lines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <BsTags size={72} />
              <MainPresentationOneTypography variant="h5" pt={4}>
                {`${t(`copy.one`)}.`}
              </MainPresentationOneTypography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <BsBookmarkStar size={72} />
              <MainPresentationOneTypography variant="h5" pt={4}>
                {`${t(`copy.two`)}.`}
              </MainPresentationOneTypography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <BsReverseLayoutTextSidebarReverse size={72} />
              <MainPresentationOneTypography variant="h5" pt={4}>
                {`${t(`copy.three`)}.`}
              </MainPresentationOneTypography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MainPresentationOne
