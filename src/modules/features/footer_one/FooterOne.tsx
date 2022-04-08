import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
import FooterOneTypography from './components/FooterOneTypography'
import { grey } from '@mui/material/colors'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import GlobalMailTo from '../../components/GlobalMailTo'
import { useTranslation } from 'next-i18next'

function Copyright() {
  return (
    <Stack direction={`row`} alignItems={`center`} sx={{ color: grey[800] }}>
      <Typography variant={'h6'}>{'© '}</Typography>
      <Link color="inherit" href="https://caditrack.com/" sx={{ mx: 1 }}>
        <Typography variant={'h6'}>{`CadiTrack`}</Typography>
      </Link>{' '}
      <Typography variant={'h6'}>{new Date().getFullYear()}</Typography>
    </Stack>
  )
}

export default function FooterOne() {
  const router = useRouter()
  console.log(router.locale)

  const { t } = useTranslation([`common`])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleEn = () => {
    router.locale === 'en'
      ? null
      : router.push(router.pathname, router.pathname, {
          locale: 'en',
        })
    setAnchorEl(null)
  }

  const handleFr = () => {
    router.locale === 'fr'
      ? null
      : router.push(router.pathname, router.pathname, {
          locale: 'fr',
        })
    setAnchorEl(null)
  }

  return (
    <Typography
      component="footer"
      sx={{
        mt: {
          xs: 10,
          md: 20,
        },
        display: 'flex',
        bgcolor: '',
        borderTop: `solid`,
        borderTopWidth: 2,
        borderTopColor: grey[200],
      }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={10} md={12}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={4}
              sx={{ height: 120, ml: { xs: -4, md: -5 } }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Tooltip title="GitHub" sx={{ mr: 2 }}>
                  <IconButton>
                    <GitHubIcon sx={{ fontSize: `lg` }} />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Twitter">
                  <IconButton>
                    <TwitterIcon sx={{ fontSize: `lg` }} />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <FooterOneTypography variant="h5" gutterBottom>
              {`${t(`glossary.simple.legal`)}`}
            </FooterOneTypography>
            <Box
              component="ul"
              sx={{
                m: 0,
                listStyle: 'none',
                p: 0,
                ml: {
                  xs: 0,
                  sm: 1,
                  md: 0.5,
                },
              }}
            >
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/terms-and-conditions">{`${t(
                  `glossary.simple.terms`
                )}`}</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/privacy">{`${t(`glossary.simple.privacy`)}`}</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={10} md={6}>
            <FooterOneTypography variant="h5" gutterBottom>
              {`${t(`glossary.simple.language`)}`}
            </FooterOneTypography>

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {router.locale === 'fr' ? `Français` : `English`}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleEn}>{`English`}</MenuItem>
              <MenuItem onClick={handleFr}>{`Français`}</MenuItem>
            </Menu>
          </Grid>

          <Grid item>
            <FooterOneTypography variant="caption">
              {`${t(`glossary.phrases.all_rights_reserved_for_questions`)} `}

              <GlobalMailTo
                mail_to={`mailto:contact@caditrack.com`}
                label={`contact@caditrack.com`}
                title={`${t(`glossary.compound.contact_us`)}`}
              />

              {'. '}
            </FooterOneTypography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}
