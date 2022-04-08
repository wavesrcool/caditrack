import { alpha, styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const NavigationTwoTypographyPrimary = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.7),

  [theme.breakpoints.up('md')]: {
    display: `flex`,
  },

  [theme.breakpoints.down('md')]: {
    display: `none`,
  },
}))

export default NavigationTwoTypographyPrimary
