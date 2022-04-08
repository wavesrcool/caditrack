import * as React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import { useTranslation } from 'next-i18next'
import Stack from '@mui/material/Stack'
import { NextLinkComposed } from '../../../lib/components/next/Link'
import Button from '@mui/material/Button'
import { ____navigationTwoRoutes } from './_static/routes'
import NavigationTwoAppBar from './components/NavigationTwoAppBar'
import NavigationTwoToolbar from './components/NavigationTwoToolbar'
import NavigationTwoTypographyPrimary from './components/NavigationTwoTypographyPrimary'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import NavigationTwoTypographySecondary from './components/NavigationTwoTypographySecondary'

interface INavigationTwoProps {
  children: React.ReactElement
}

function NavigationTwoScrollSlide(props: INavigationTwoProps) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function NavigationTwo() {
  const { t } = useTranslation([`common`])

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <React.Fragment>
      <NavigationTwoScrollSlide>
        <NavigationTwoAppBar>
          <NavigationTwoToolbar
            disableGutters
            sx={{ justifyContent: `space-evenly` }}
          >
            <NavigationTwoTypographyPrimary variant="h6">
              {`${t(`common:app.root`)}`}
            </NavigationTwoTypographyPrimary>

            <Box sx={{ flex: 0.5, display: { xs: `none`, lg: `flex` } }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                //color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {____navigationTwoRoutes.map((route) => (
                  <MenuItem key={route.id} onClick={handleCloseNavMenu}>
                    <Button
                      component={NextLinkComposed}
                      to={{
                        pathname: route.pathname,
                      }}
                      sx={{
                        color: `text.secondary`,
                      }}
                    >{`${t(
                      `common:navigation.routes.${route.id}.name`
                    )}`}</Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {____navigationTwoRoutes.map((route) => (
                <Box key={route.id}>
                  <Button
                    component={NextLinkComposed}
                    to={{
                      pathname: route.pathname,
                    }}
                    sx={{
                      color: `text.secondary`,
                    }}
                  >{`${t(
                    `common:navigation.routes.${route.id}.name`
                  )}`}</Button>
                </Box>
              ))}
            </Stack>

            <NavigationTwoTypographySecondary
              variant="h6"
              sx={{ ml: { xs: -6, sm: -4 } }}
            >
              {`${t(`common:app.root`)}`}
            </NavigationTwoTypographySecondary>
          </NavigationTwoToolbar>
        </NavigationTwoAppBar>
      </NavigationTwoScrollSlide>
      <NavigationTwoToolbar />
    </React.Fragment>
  )
}
