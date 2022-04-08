/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

// -s Root
import RootShape from './shapes/root/RootShape'

export function makeStore() {
  return configureStore({
    reducer: { RootShape },
  })
}

const store = makeStore()

export type AppShapes = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppShapes,
  unknown,
  Action<string>
>

export default store
