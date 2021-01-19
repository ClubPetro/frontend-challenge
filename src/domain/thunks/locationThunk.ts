import { Dispatch } from 'redux'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { EngageState } from '../DomainLayer'
import {
  addLocation,
  deleteLocation,
  editLocation,
  listLocations,
} from '../../data/services/location'
import { Location, UpdateLocation } from '../entities/location'

export interface ThunkApi {
  dispatch: Dispatch
  state: EngageState
  rejectValue: string
}

export const getLocationsThunk = createAsyncThunk<Location[], void, ThunkApi>(
  'thunk/location/getLocationsThunk',
  async (_, thunkAPI) => {
    try {
      return await listLocations()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const deleteLocationThunk = createAsyncThunk<
  Location[],
  number,
  ThunkApi
>('thunk/location/deleteLocationThunk', async (payload, thunkAPI) => {
  try {
    await deleteLocation(payload)
    return await listLocations()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const editLocationThunk = createAsyncThunk<
  Location[],
  Location,
  ThunkApi
>('thunk/location/editLocationThunk', async (payload, thunkAPI) => {
  try {
    await editLocation(payload)
    return await listLocations()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addLocationThunk = createAsyncThunk<
  Location[],
  UpdateLocation,
  ThunkApi
>('thunk/location/addLocationThunk', async (payload, thunkAPI) => {
  try {
    await addLocation(payload)
    return await listLocations()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
