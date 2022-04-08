import { Grid, Paper, Stack, Typography, styled } from '@mui/material'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'
import Container from '@mui/material/Container'
import { useTranslation } from 'next-i18next'
import * as React from 'react'
import { GlobalHeading } from '../../modules/components/GlobalHeading'
import FooterOne from '../../modules/features/footer_one/FooterOne'
import NavigationTwo from '../../modules/features/navigation_two/NavigationTwo'

import NextLink from 'next/link'

const card = 970

const imgW = 280

const scaleH = 0.7

const scaleSm = 1.4
const scaleMd = 1.2
const scaleLg = 1.6

const Holder = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  justifyContent: 'center',
  height: `${card}px`,
}))

const HowItWorksOrigin: React.FC = () => {
  console.log(`*functional* HowItWorksOrigin`)

  const { t } = useTranslation([`common`])

  return (
    <div>
      <NavigationTwo />

      <Box mt={8} px={8}>
        <GlobalHeading>{`${t(`how_it_works.heading1`)}`}</GlobalHeading>
      </Box>

      <Container sx={{ mt: 10, backgroundColor: grey[50] }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Holder>
                <Stack
                  direction="column"
                  py={2}
                  justifyContent="center"
                  alignContent="center"
                  px={{
                    xs: `8px`,
                  }}
                >
                  <Box pb={2}>
                    <Typography variant={`h5`} fontWeight={600}>
                      {t(`phases.rx`)}
                    </Typography>
                  </Box>

                  <Box display="flex" flex={1} justifyContent="center">
                    <Box
                      component="img"
                      src="/images/caditrack/rx-img.jpeg"
                      alt="receiving"
                      sx={{
                        width: {
                          xs: `${imgW}px`,
                          sm: `${imgW * scaleSm}px`,
                          md: `${imgW * scaleMd}px`,
                          lg: `${imgW * scaleLg}px`,
                        },

                        borderRadius: 1,

                        height: {
                          xs: `${imgW * scaleH}px`,
                          sm: `${imgW * scaleH * scaleSm}px`,
                          md: `${imgW * scaleH * scaleMd}px`,
                          lg: `${imgW * scaleH * scaleLg}px`,
                        },
                      }}
                    />
                  </Box>

                  <Box pt={4}>
                    <Typography textAlign={`justify`}>
                      {t(`how_it_works.main.rx.content1`)}
                    </Typography>
                  </Box>

                  <Box
                    pt={1}
                    display="flex"
                    flexGrow={1}
                    justifyContent={`flex-end`}
                    alignContent={`flex-end`}
                  >
                    <Typography textAlign={`justify`}>
                      <NextLink href={`how-it-works/receiving`}>
                        {t(`glossary.compound.read_more`)}
                      </NextLink>
                    </Typography>
                  </Box>
                </Stack>
              </Holder>
            </Grid>

            <Grid item xs={12} md={6}>
              <Holder>
                <Stack px={10} py={2}>
                  <Box pb={2}>
                    <Typography variant={`h5`} fontWeight={600}>
                      {t(`phases.bl`)}
                    </Typography>
                  </Box>

                  <Box display="flex" flex={1} justifyContent="center">
                    <Box
                      component="img"
                      src="/images/caditrack/bl-img.jpeg"
                      alt="blending"
                      sx={{
                        width: {
                          xs: `${imgW}px`,
                          sm: `${imgW * scaleSm}px`,
                          md: `${imgW * scaleMd}px`,
                          lg: `${imgW * scaleLg}px`,
                        },

                        borderRadius: 1,

                        height: {
                          xs: `${imgW * scaleH}px`,
                          sm: `${imgW * scaleH * scaleSm}px`,
                          md: `${imgW * scaleH * scaleMd}px`,
                          lg: `${imgW * scaleH * scaleLg}px`,
                        },
                      }}
                    />
                  </Box>

                  <Box pt={4}>
                    <Typography textAlign={`justify`}>
                      {t(`how_it_works.main.bl.content1`)}
                    </Typography>
                  </Box>
                  <Box pt={1} display="flex" justifyContent={`flex-end`}>
                    <Typography textAlign={`justify`}>
                      <NextLink href={`how-it-works/blending`}>
                        {t(`glossary.compound.read_more`)}
                      </NextLink>
                    </Typography>
                  </Box>
                </Stack>
              </Holder>
            </Grid>

            <Grid item xs={12} md={6}>
              <Holder>
                <Stack px={10} py={2}>
                  <Box pb={2}>
                    <Typography variant={`h5`} fontWeight={600}>
                      {t(`phases.ps`)}
                    </Typography>
                  </Box>

                  <Box display="flex" flex={1} justifyContent="center">
                    <Box
                      component="img"
                      src="/images/caditrack/ps-img.jpeg"
                      alt="packing-seal"
                      sx={{
                        width: {
                          xs: `${imgW}px`,
                          sm: `${imgW * scaleSm}px`,
                          md: `${imgW * scaleMd}px`,
                          lg: `${imgW * scaleLg}px`,
                        },

                        borderRadius: 1,

                        height: {
                          xs: `${imgW * scaleH}px`,
                          sm: `${imgW * scaleH * scaleSm}px`,
                          md: `${imgW * scaleH * scaleMd}px`,
                          lg: `${imgW * scaleH * scaleLg}px`,
                        },
                      }}
                    />
                  </Box>

                  <Box pt={4}>
                    <Typography textAlign={`justify`}>
                      {t(`how_it_works.main.ps.content1`)}
                    </Typography>
                  </Box>
                  <Box pt={1} display="flex" justifyContent={`flex-end`}>
                    <Typography textAlign={`justify`}>
                      <NextLink href={`how-it-works/packing-and-seal`}>
                        {t(`glossary.compound.read_more`)}
                      </NextLink>
                    </Typography>
                  </Box>
                </Stack>
              </Holder>
            </Grid>

            <Grid item xs={12} md={6}>
              <Holder>
                <Stack px={10} py={2}>
                  <Box pb={2}>
                    <Typography variant={`h5`} fontWeight={600}>
                      {t(`phases.sd`)}
                    </Typography>
                  </Box>

                  <Box display="flex" flex={1} justifyContent="center">
                    <Box
                      component="img"
                      src="/images/caditrack/sd-img.jpeg"
                      alt="sales-dispatch"
                      sx={{
                        width: {
                          xs: `${imgW}px`,
                          sm: `${imgW * scaleSm}px`,
                          md: `${imgW * scaleMd}px`,
                          lg: `${imgW * scaleLg}px`,
                        },

                        borderRadius: 1,

                        height: {
                          xs: `${imgW * scaleH}px`,
                          sm: `${imgW * scaleH * scaleSm}px`,
                          md: `${imgW * scaleH * scaleMd}px`,
                          lg: `${imgW * scaleH * scaleLg}px`,
                        },
                      }}
                    />
                  </Box>

                  <Box pt={4}>
                    <Typography textAlign={`justify`}>
                      {t(`how_it_works.main.sd.content1`)}
                    </Typography>
                  </Box>
                  <Box pt={1} display="flex" justifyContent={`flex-end`}>
                    <Typography textAlign={`justify`}>
                      <NextLink href={`how-it-works/sales-and-dispatch`}>
                        {t(`glossary.compound.read_more`)}
                      </NextLink>
                    </Typography>
                  </Box>
                </Stack>
              </Holder>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <FooterOne />
    </div>
  )
}

/*

 <Grid container spacing={6}>
            {phases.map((a, index) => (
              <Box key={index}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  sx={{ mx: `auto`, backgroundColor: red[400] }}
                >
                  <PhasePresentationCard
                    values={{
                      image_url: `/images/phases/${a}.png`,
                      image_alt: `${a}`,
                      content_heading: `common:caditrack.phases.${a}.title`,
                      content_body: `common:caditrack.phases.${a}.content_body`,
                      link: `/phases/${a}`,
                    }}
                  />
                </Grid>
              </Box>
            ))}
          </Grid>


*/

export default HowItWorksOrigin
