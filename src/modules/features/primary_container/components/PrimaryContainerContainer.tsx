import { red } from '@mui/material/colors'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

const ContentContainerContainer = styled(Container)(({ theme }) => ({
  backgroundColor: red[600],

  [theme.breakpoints.down('md')]: {
    minHeight: `2000px`,
  },

  [theme.breakpoints.up('md')]: {
    minHeight: `1000px`,
  },
}))

export default ContentContainerContainer
