import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Button, TextField, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { grey, yellow } from '@mui/material/colors'

function MainPresentationCall(): EmotionJSX.Element {
  const { t } = useTranslation([`common`])

  const handleSubmit = React.useCallback(() => {
    console.log(`submit`)
  }, [])

  return (
    <Container component="section" sx={{ my: 6, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: yellow[800],
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography
                variant="h2"
                component="h2"
                fontWeight={600}
                gutterBottom
                color={grey[100]}
              >
                {`${t(`glossary.phrases.stay_in_touch`)}.`}
              </Typography>
              <Typography
                variant="h5"
                fontWeight={500}
                gutterBottom
                color={grey[100]}
              >
                {`${t(`glossary.phrases.we_will_let_you_know_about`)}.`}
              </Typography>
              <TextField
                placeholder={t(`glossary.compound.your_email`)}
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                {`${t(`glossary.phrases.keep_me_updated`)}`}
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            component="img"
            src="/images/sea.png"
            alt="ask-questions"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainPresentationCall
