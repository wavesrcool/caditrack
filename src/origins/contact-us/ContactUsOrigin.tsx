import { useTranslation } from 'next-i18next'
import * as React from 'react'
import * as MUI from '@mui/material'
import FooterOne from '../../modules/features/footer_one/FooterOne'
import NavigationTwo from '../../modules/features/navigation_two/NavigationTwo'
import { grey } from '@mui/material/colors'
import { AiTwotoneMail } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

const Item = MUI.styled(MUI.Paper)(({ theme }) => ({
  backgroundColor: grey[100],
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const gridSpacing = 2
const gridMy = 4
const gridPx = 8

const gridFull = 12

const ContactUsOrigin: React.FC = () => {
  console.log(`*functional* ContactUsOrigin`)

  const { t } = useTranslation([`common`])

  return (
    <div>
      <NavigationTwo />

      <MUI.Grid container spacing={gridSpacing} my={gridMy} px={gridPx}>
        <MUI.Grid item xs={gridFull}>
          <Item
            sx={{
              pt: 8,
              pb: 20,
              px: 8,
            }}
          >
            <MUI.Stack direction={`column`}>
              <MUI.Typography
                sx={{
                  fontSize: `36px`,
                  fontWeight: 500,
                  pb: 6,
                  color: grey[800],
                }}
              >
                {`${t(`glossary.phrases.we_would_love_to_hear_from_you`)}.`}
              </MUI.Typography>
              <MUI.Stack
                direction={{ xs: `column`, md: `row` }}
                sx={{ width: `100%`, px: 0 }}
              >
                <MUI.Box
                  sx={{
                    width: {
                      xs: `100%`,
                      md: `40%`,
                    },
                    display: `flex`,
                  }}
                >
                  <MUI.Stack
                    direction={`column`}
                    sx={{
                      width: `100%`,
                      alignItems: `center`,
                      justifyContent: `center`,

                      mt: { xs: 12, md: 0 },
                      color: (th) => th.caditrack.colors.green,
                      opacity: 0.7,
                    }}
                  >
                    <AiTwotoneMail size={124} />

                    <MUI.Button
                      onClick={(e) => {
                        window.location =
                          `mailto:contact@caditrack.com` as unknown as Location
                        e.preventDefault()
                      }}
                      sx={{
                        color: grey[800],
                        fontSize: `24px`,
                        textTransform: 'none',
                      }}
                    >
                      {`info@caditrack.ca`}
                    </MUI.Button>
                  </MUI.Stack>
                </MUI.Box>

                <MUI.Box sx={{ width: { xs: `100%`, md: `50%` } }}>
                  <MUI.Stack
                    direction={`column`}
                    sx={{
                      width: `100%`,
                      alignItems: `center`,
                      pl: {
                        lg: 16,
                      },
                      mt: { xs: 12, md: 0 },
                      color: (th) => th.caditrack.colors.green,
                      opacity: 0.7,
                    }}
                  >
                    <MdLocationOn size={124} />
                    <MUI.Typography
                      sx={{
                        fontSize: `24px`,
                        fontWeight: 500,
                        textAlign: `justify`,
                        color: grey[800],
                        pt: `10px`,
                      }}
                    >{`Box 329, Mansons Landing,`}</MUI.Typography>
                    <MUI.Typography
                      sx={{
                        fontSize: `24px`,
                        fontWeight: 500,
                        textAlign: `justify`,
                        color: grey[800],
                        pt: `10px`,
                      }}
                    >{`V0P 1K0, BC, Canada`}</MUI.Typography>
                  </MUI.Stack>
                </MUI.Box>
              </MUI.Stack>
            </MUI.Stack>
          </Item>
        </MUI.Grid>
      </MUI.Grid>

      <FooterOne />
    </div>
  )
}

export default ContactUsOrigin

/*

   Thank you for your interest in CadiTrack and our track and
                    trace solutions for small businesses.

 We are here to answer any questions you might have about our
                    products. Please don't hesitate to get in touch with us if
                    you have any questions.

  <GlobalPageContainer
        element={
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Item>
                  <Typography variant={`h4`}>{`${t(
                    `glossary.phrases.get_in_touch`
                  )}`}</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  <Typography variant={`h4`}>{`${t(
                    `glossary.phrases.send_an_email`
                  )}`}</Typography>
                </Item>
              </Grid>
            </Grid>
          </>
        }
      />
      */
