import { baseAPI } from "@/redux/api/base-api";

// Interfaces are examples
interface IResponse {
    email: string;
    password: string;
}


const getCountriesApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        getCountries: builder.query<IResponse, void>({
            query: () => ({
                url: 'country',
                method: 'GET',
            }),
            providesTags: ['getCountries'],
        }),
    }),
});

export const {
    useGetCountriesQuery,
    useLazyGetCountriesQuery,
} = getCountriesApiSlice;
