import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'

const NavigationTwoToolbar = styled(Toolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}))

export default NavigationTwoToolbar
