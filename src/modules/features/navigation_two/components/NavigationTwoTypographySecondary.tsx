import { alpha, styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const NavigationTwoTypographySecondary = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.7),
  flexGrow: 1,

  [theme.breakpoints.up('md')]: {
    display: `none`,
  },

  [theme.breakpoints.down('md')]: {
    display: `flex`,
  },
}))

export default NavigationTwoTypographySecondary
