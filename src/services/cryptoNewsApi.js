import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
  'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '85ea2fa5b5msha8a318c4d31103bp16558ajsn86c7d84234e6'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders}) 

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query(
      {
        query: ({newsCategory, count}) => createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      }
    )
  })
})

export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi
