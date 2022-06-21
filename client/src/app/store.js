import {configureStore} from '@reduxjs/toolkit'
import rankReducer from '../features/rank/rankSlice'

//redux store
export default configureStore({
  reducer : rankReducer,
})
