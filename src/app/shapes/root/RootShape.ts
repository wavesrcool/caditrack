import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppShapes } from '../../store'

/**
 * interface: state.value
 */
interface IStateValueRootShape {
  loading: boolean
  error: boolean
  message: string | undefined
}

/**
 * interface: state
 */
interface IStateRootShape {
  value: IStateValueRootShape
}

/**
 * state: initial
 */
const initialState: IStateRootShape = {
  value: {
    loading: false,
    error: false,
    message: undefined,
  },
}

/**
 * reducers
 */
export const RootShapeSlice = createSlice({
  name: 'RootShape',
  initialState,
  reducers: {
    initRootShape: (state) => {
      state.value = { loading: false, error: false, message: undefined }
    },

    writeRootShapeLoadingTrue: (state) => {
      state.value = {
        ...state.value,
        loading: true,
      }
    },

    writeRootShapeLoadingFalse: (state) => {
      state.value = {
        ...state.value,
        loading: false,
      }
    },

    writeRootShapeErrorTrue: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        error: true,
        message: action.payload,
      }
    },

    writeRootShapeErrorFalse: (state) => {
      state.value = {
        ...state.value,
        error: false,
        message: undefined,
      }
    },

    /**
     * lib
     */
  },
})

export const {
  initRootShape,
  writeRootShapeLoadingTrue,
  writeRootShapeLoadingFalse,
  writeRootShapeErrorTrue,
  writeRootShapeErrorFalse,
} = RootShapeSlice.actions

export const ofRootShape = (state: AppShapes): IStateValueRootShape =>
  state.RootShape.value
export default RootShapeSlice.reducer
