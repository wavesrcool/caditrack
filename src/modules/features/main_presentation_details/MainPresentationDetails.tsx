import * as React from 'react'
import * as MUI from '@mui/material'

import { useTranslation } from 'next-i18next'
import MainPresentationDetailsFeature from './MainPresentationDetailsFeature'
import Link from 'next/link'

function MainPresentationDetails() {
  const { t } = useTranslation([`common`])

  return (
    <MUI.Container sx={{ mb: 20 }}>
      <MUI.Typography
        color="inherit"
        align="center"
        variant="h3"
        fontWeight={600}
        sx={{ mb: 24, mt: { xs: 10, md: 16 } }}
      >
        {`${t(`common:glossary.phrases.take_your_quality_control_to`)}.`}
      </MUI.Typography>

      <MUI.Grid container sx={{ width: `100%` }} spacing={3}>
        <MUI.Grid
          item
          xs={12}
          md={3}
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <MUI.Typography
            color="inherit"
            // align="center"
            variant="h5"
            fontWeight={600}
            fontStyle={`italic`}
          >
            {`${t(`common:glossary.compound.process_phases`)}:`}
          </MUI.Typography>
        </MUI.Grid>

        <MUI.Grid
          item
          xs={12}
          md={2}
          sx={{
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          <Link href={`how-it-works/receiving`} passHref>
            <MUI.Button
              sx={{
                textTransform: `unset`,
                px: 3,
                py: 2,
              }}
            >
              <MUI.Typography color="inherit" variant="h5" fontWeight={500}>
                {`${t(`common:phases.rx`)} `}
              </MUI.Typography>
            </MUI.Button>
          </Link>
        </MUI.Grid>

        <MUI.Grid
          item
          xs={12}
          md={2}
          sx={{
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          <Link href={`how-it-works/blending`} passHref>
            <MUI.Button sx={{ textTransform: `unset`, px: 3, py: 2 }}>
              <MUI.Typography
                color="inherit"
                align="center"
                variant="h5"
                fontWeight={500}
              >
                {`${t(`common:phases.bl`)} `}
              </MUI.Typography>
            </MUI.Button>
          </Link>
        </MUI.Grid>

        <MUI.Grid
          item
          xs={12}
          md={2}
          sx={{
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          <Link href={`how-it-works/packing-and-seal`} passHref>
            <MUI.Button sx={{ textTransform: `unset`, px: 3, py: 2 }}>
              <MUI.Typography
                color="inherit"
                align="center"
                variant="h5"
                fontWeight={500}
              >
                {`${t(`common:phases.rx`)} `}
              </MUI.Typography>
            </MUI.Button>
          </Link>
        </MUI.Grid>

        <MUI.Grid
          item
          xs={12}
          md={3}
          sx={{
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          <Link href={`how-it-works/sales-and-dispatch`} passHref>
            <MUI.Button sx={{ textTransform: `unset`, px: 3, py: 2 }}>
              <MUI.Typography
                color="inherit"
                align="center"
                variant="h5"
                fontWeight={500}
              >
                {`${t(`common:phases.sd`)} `}
              </MUI.Typography>
            </MUI.Button>
          </Link>
        </MUI.Grid>
      </MUI.Grid>

      <MainPresentationDetailsFeature
        title={`${t(`features.end_to_end_workflow.title`)}:`}
        body={`${t(`features.end_to_end_workflow.content_1`)}.`}
        kind={1}
        path={`/sales-dispatch`}
      />

      <MainPresentationDetailsFeature
        title={`${t(`features.recipe_assistant.title`)}:`}
        body={`${t(`features.recipe_assistant.content_1`)}.`}
        kind={2}
      />

      <MainPresentationDetailsFeature
        title={`${t(`features.packing_slip_assistant.title`)}:`}
        body={`${t(`features.packing_slip_assistant.content_1`)}.`}
        kind={3}
      />
    </MUI.Container>
  )
}

export default MainPresentationDetails
