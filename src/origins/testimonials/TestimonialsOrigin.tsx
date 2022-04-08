import * as React from 'react'
import * as MUI from '@mui/material'
import FooterOne from '../../modules/features/footer_one/FooterOne'
import NavigationTwo from '../../modules/features/navigation_two/NavigationTwo'
import { grey } from '@mui/material/colors'
import { useTranslation } from 'next-i18next'
import { GlobalHeading } from '../../modules/components/GlobalHeading'
import { GlobalTypoOne } from '../../modules/components/GlobalTypoOne'

const Item = MUI.styled(MUI.Paper)(({ theme }) => ({
  backgroundColor: grey[200],
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  //textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const TestimonialsOrigin: React.FC = () => {
  console.log(`*functional* TestimonialsOrigin`)

  const { t } = useTranslation([`common`])

  return (
    <div>
      <NavigationTwo />

      <MUI.Grid container spacing={2} my={4} px={{ xs: 2, md: 8 }}>
        <MUI.Grid item xs={12} mb={4}>
          <GlobalHeading>{`${t(
            `navigation.routes.testimonials.name`
          )}`}</GlobalHeading>
        </MUI.Grid>

        <MUI.Grid item xs={12}>
          <Item
            sx={{
              py: 8,
              //px: 16,
              px: 4,
              width: `100%`,
            }}
          >
            <MUI.Stack direction={{ xs: `column`, md: `row` }} spacing={4}>
              <MUI.Stack
                direction="column"
                spacing={2}
                justifyContent={`space-between`}
              >
                <MUI.Box
                  sx={{
                    display: `flex`,
                    borderRadius: 4,
                    justifyContent: `center`,
                  }}
                >
                  <MUI.Box
                    component="img"
                    src="/images/caditrack/lovena.jpeg"
                    alt="lovena"
                    sx={{
                      width: {
                        xs: `220px`,
                        sm: `280px`,
                        md: `300px`,
                      },
                    }}
                  />
                </MUI.Box>

                <MUI.Box
                  sx={{
                    pt: 4,
                    display: `flex`,
                    justifyContent: `flex-end`,
                    width: `100%`,
                    fontWeight: 600,
                  }}
                >
                  <GlobalTypoOne>{`- Lovena, The Gathering Place Trading Company`}</GlobalTypoOne>
                </MUI.Box>
              </MUI.Stack>

              <MUI.Stack
                direction="column"
                spacing={2}
                width={{ xs: `100%`, md: `50%` }}
                justifyContent={{ md: `center` }}
                pl={2}
              >
                <GlobalTypoOne>{`"${t(
                  `testimonials.gathering_place.lovena_1`
                )}"`}</GlobalTypoOne>

                <GlobalTypoOne>{`"${t(
                  `testimonials.gathering_place.lovena_2`
                )}"`}</GlobalTypoOne>
              </MUI.Stack>
            </MUI.Stack>
          </Item>
        </MUI.Grid>
      </MUI.Grid>

      <MUI.Grid container spacing={2} my={4} px={{ xs: 2, md: 8 }}>
        <MUI.Grid item xs={12}>
          <Item
            sx={{
              py: 8,
              //px: 16,
              px: 4,
              width: `100%`,
            }}
          >
            <MUI.Stack direction={{ xs: `column`, md: `row` }} spacing={4}>
              <MUI.Stack
                direction="column"
                spacing={2}
                justifyContent={`space-between`}
              >
                <MUI.Box
                  sx={{
                    display: `flex`,
                    borderRadius: 4,
                    justifyContent: `center`,
                  }}
                >
                  <MUI.Box
                    component="img"
                    src="/images/caditrack/ben.jpeg"
                    alt="ben"
                    sx={{
                      width: {
                        xs: `220px`,
                        sm: `280px`,
                        md: `300px`,
                      },
                    }}
                  />
                </MUI.Box>

                <MUI.Box
                  sx={{
                    pt: 4,
                    display: `flex`,
                    justifyContent: `flex-end`,
                    width: `100%`,
                    fontWeight: 600,
                  }}
                >
                  <GlobalTypoOne>{`- Ben, The Gathering Place Trading Company`}</GlobalTypoOne>
                </MUI.Box>
              </MUI.Stack>

              <MUI.Stack
                direction="column"
                spacing={2}
                width={{ xs: `100%`, md: `50%` }}
                justifyContent={{ md: `center` }}
                pl={2}
              >
                <GlobalTypoOne>{`"${t(
                  `testimonials.gathering_place.ben_1`
                )}"`}</GlobalTypoOne>

                <GlobalTypoOne>{`"${t(
                  `testimonials.gathering_place.ben_2`
                )}"`}</GlobalTypoOne>
              </MUI.Stack>
            </MUI.Stack>
          </Item>
        </MUI.Grid>
      </MUI.Grid>

      <FooterOne />
    </div>
  )
}

export default TestimonialsOrigin

/*

    <Image
                    //src="/images/caditrack/lovena.jpg"
                    src={lovena}
                    //sizes="80 640 750"
                    //sizes="180"
                    layout="responsive"
                    alt="lovena"
                  />

  <Image
                    //src="/images/caditrack/lovena.jpg"
                    src={ben}
                    //sizes="80 640 750"
                    //sizes="180"
                    layout="responsive"
                    alt="lovena"
                  />
                  */
