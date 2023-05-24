import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../Store'

// for data read
export const useAppDispatch: () => AppDispatch = useDispatch
// for actions
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector