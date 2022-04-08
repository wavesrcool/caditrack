import * as React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SupportIcon from '@mui/icons-material/Support'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

function MainPresentationContact() {
  const { t } = useTranslation([`common`])

  const { push } = useRouter()

  return (
    <Container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 20,
      }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
        onClick={() => push('/contact-us')}
      >
        <Typography variant="h4" component="span">
          {`${t(`glossary.phrases.got_any_questions_need_help`)}`}
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        {`${t(`glossary.phrases.we_are_here_to_help`)}`}
      </Typography>
      <SupportIcon sx={{ fontSize: `lg` }} />
    </Container>
  )
}

export default MainPresentationContact
