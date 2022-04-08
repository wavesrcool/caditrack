import * as MUI from '@mui/material'

export const GlobalTypoOne = MUI.styled(MUI.Typography)(({ theme }) => ({
  textAlign: 'justify',
  color: theme.palette.text.secondary,
  fontSize: `20px`,
}))
