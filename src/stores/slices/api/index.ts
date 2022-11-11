import type { FetchArgs } from '@reduxjs/toolkit/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
import { SpellDataResponse, SpellDetailItem, SpellDetailRequest, SpellRequest } from 'interfaces/spell';
import { axiosBaseQuery } from 'services/baseQuery';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    spell: builder.query<SpellDataResponse, SpellRequest>({
      query: (params: SpellRequest): FetchArgs => ({
        params,
        url: 'spells',
      }),
    }),
    spellDetail: builder.query<SpellDetailItem, SpellDetailRequest>({
      query: (params: SpellDetailRequest): FetchArgs => ({
        url: `spells/${params.index}`,
      }),
    }),
  }),
});

export const apiReducer = apiSlice.reducer;

export const { useSpellQuery, useSpellDetailQuery } = apiSlice;
