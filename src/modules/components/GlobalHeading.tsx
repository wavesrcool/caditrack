import * as MUI from '@mui/material'

export const GlobalHeading = MUI.styled(MUI.Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: `32px`,
  fontWeight: 600,
}))
