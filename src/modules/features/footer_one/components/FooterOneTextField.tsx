import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

const FooterOneTextField = styled(TextField)(({ theme }) => ({
  color: theme.palette.grey[800],
}))

export default FooterOneTextField
