import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlossaryState {
    glossary: "all" |
    "crypto-terms" |
    "tax-terms" |
    "e-commerce"
    | "";
}

const initialState: GlossaryState = {
    glossary: "all",
};

const glossarySlice = createSlice({
    name: 'glossary',
    initialState,
    reducers: {
        setGlossaryValue(state, action: PayloadAction<"all" |
            "crypto-terms" |
            "tax-terms" |
            "e-commerce"
            | "">) {
            state.glossary = action.payload;
        },
    },
});

export const { setGlossaryValue } = glossarySlice.actions;
export default glossarySlice.reducer;
