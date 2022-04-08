import * as React from 'react'
import { Link } from '@mui/material'

interface IGlobalMailToProps {
  mail_to: any
  label: string
  title?: string
}

const GlobalMailTo = (props: IGlobalMailToProps) => {
  console.log(`*functional* GlobalMailTo`)
  return (
    <Link
      rel="caditrack"
      title={props.title ? props.title : `mail-to-link`}
      onClick={(e) => {
        window.location = props.mail_to
        e.preventDefault()
      }}
    >
      {props.label}
    </Link>
  )
}

export default GlobalMailTo
