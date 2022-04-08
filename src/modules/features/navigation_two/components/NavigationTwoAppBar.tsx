import AppBar from '@mui/material/AppBar'
import { alpha, styled } from '@mui/material/styles'

const NavigationTwoAppBar = styled(AppBar)(({ theme }) => ({
  height: 64,
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}))

export default NavigationTwoAppBar
