import * as React from 'react'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'

const CONTAINER_HEIGHT = 900

interface IGlobalPageContainerProps {
  element: JSX.Element
}

const GlobalPageContainer = (props: IGlobalPageContainerProps) => {
  console.log(`*functional* GlobalPageContainer`)

  props ? null : null

  return (
    <Box
      display={'flex'}
      sx={{
        backgroundColor: grey[300],
        height: `${CONTAINER_HEIGHT}px`,
      }}
    >
      <Box
        display="flex"
        m="auto"
        sx={{
          mt: 4,
          height: `${CONTAINER_HEIGHT * 0.7}px`,
          width: `${CONTAINER_HEIGHT * 0.8 * 1.61}px`,
          backgroundColor: grey[200],
          borderRadius: 1,
        }}
      >
        <Box m="auto">
          <Box
            m="auto"
            sx={{
              flex: 1,
              flexDirection: `row`,
              mx: 10,
              //backgroundColor: grey[100],
            }}
          >
            {props.element}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default GlobalPageContainer
