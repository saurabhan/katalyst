import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
    user?: string;
    habitNames?: string[];
    progress?: {
        [key: string]: {
            [key: string]: boolean;
        },
    };
    isActive?: boolean[];
    startDate?: string;
    endDate?: string;
}
const initialState: Habit = {
    user: "H5somFgvilaBICISEURug0TNFgM2",
    habitNames: ["swim", "run", "walk"],
    progress: {
        swim : {
            day16 : true,
            day17 : true,
            day21 : true,
        },
        run : {
            day15 : true,
            day19 : true,
            day20 : true,
        },
        walk : {
            day16 : true,
            day20 : true,
            day21 : true,
        }
    },
    isActive: [],
    startDate: "2020-01-01",
    endDate: "2020-12-31",

};

export const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action: PayloadAction<any>) => {
            state.user = action.payload.uid
            state.habitNames?.push(action.payload.habitName);
            state.startDate = action.payload.startDate
            state.endDate = action.payload.endDate
    },
        removeHabit(state, action: PayloadAction<string>) {
            state.habitNames?.splice(state.habitNames.indexOf(action.payload), 1);
        },
       addProgress(state, action: PayloadAction<{}>) {
            state.progress = {
                ...state.progress,
                ...action.payload,
            };
        },
    }
});

export const { addHabit, removeHabit, addProgress } = habitSlice.actions;
export default habitSlice.reducer;
