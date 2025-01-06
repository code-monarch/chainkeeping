import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IntegrationsState {
    integration: "all" |
    "exchanges" |
    "wallets" |
    "blockchain" |
    "accounting" |
    "digital-platforms" | "";
}

const initialState: IntegrationsState = {
    integration: "all",
};

const integrationsSlice = createSlice({
    name: 'integrations',
    initialState,
    reducers: {
        setIntegrationValue(state, action: PayloadAction<"all" |
            "exchanges" |
            "wallets" |
            "blockchain" |
            "accounting" | "digital-platforms"
            | "">) {
            state.integration = action.payload;
        },
    },
});

export const { setIntegrationValue } = integrationsSlice.actions;
export default integrationsSlice.reducer;
