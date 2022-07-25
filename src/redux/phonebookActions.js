import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setFilterTerm = createAction('phonebook/setFilterTerm');

export const getContatcts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const {data} = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/contacts`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContatct',
  async (contactId, { rejectWithValue }) => {
    try {
      const {data} = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/contacts/${contactId}`,
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContatct',
  async (body, { rejectWithValue }) => {
    try {
      const {data} = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/contacts`,
        {
          body: JSON.stringify(body),
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
