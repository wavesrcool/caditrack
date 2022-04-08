import * as MUI from '@mui/material'
import { grey } from '@mui/material/colors'
import { AiFillHdd, AiFillSchedule, AiTwotoneContainer } from 'react-icons/ai'

const Item = MUI.styled(MUI.Paper)(({ theme }) => ({
  backgroundColor: grey[50],
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}))

const gridSpacing = 2
const gridMy = 8
const gridPx = 4
const gridFull = 12

function MainPresentationDetailsFeature({ title, body, kind }: any) {
  //const { t } = useTranslation([`common`])
  return (
    <MUI.Grid container spacing={gridSpacing} my={gridMy} px={gridPx}>
      <MUI.Grid item xs={gridFull}>
        <Item
          sx={{
            py: 4,
            px: 8,
          }}
        >
          <MUI.Stack sx={{ direction: `column` }}>
            <MUI.Box sx={{ display: `flex`, direction: `row` }}>
              <MUI.Typography
                color="inherit"
                //align="flex-start"
                variant="h5"
                fontWeight={500}
                sx={{ mb: 2, mt: { xs: 0, md: 2 }, pr: 2 }}
              >
                {title}
              </MUI.Typography>
            </MUI.Box>

            <MUI.Box
              sx={{
                display: `flex`,
                direction: `row`,
                alignItems: `center`,
                color: '#336699',
              }}
            >
              {kind === 1 ? (
                <AiFillHdd size={148} />
              ) : kind === 2 ? (
                <AiFillSchedule size={124} />
              ) : kind === 3 ? (
                <AiTwotoneContainer size={124} />
              ) : null}

              <MUI.Typography
                //align="flex-start"
                variant="h6"
                fontWeight={400}
                textAlign="justify"
                sx={{ mb: 4, mt: { xs: 0, md: 4 }, px: 2, ml: 4 }}
                color={grey[600]}
              >
                {body}
              </MUI.Typography>
            </MUI.Box>
          </MUI.Stack>
        </Item>
      </MUI.Grid>
    </MUI.Grid>
  )
}

export default MainPresentationDetailsFeature
