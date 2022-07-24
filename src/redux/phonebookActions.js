import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setFilterTerm = createAction('phonebook/setFilterTerm');

export const getContatcts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        'https://62dd32e957ac3c3f3c661287.mockapi.io/api/contacts'
      );
      const data = await res.json();
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
      const res = await fetch(
        `https://62dd32e957ac3c3f3c661287.mockapi.io/api/contacts/${contactId}`,
        { method: 'DELETE' }
      );
      const data = await res.json();
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
      const res = await fetch(
        `https://62dd32e957ac3c3f3c661287.mockapi.io/api/contacts`,
        {
          method: 'POST',
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
