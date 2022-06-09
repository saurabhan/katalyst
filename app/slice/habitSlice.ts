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
            day18 : false,
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
    startDate: "2022-01-01",
    endDate: "2022-12-31",

};

export const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action: PayloadAction<any>) => {
            if(state.habitNames?.includes(action.payload.habitName)){
                console.log('already exists')
                return state;
            }
            state.user = action.payload.uid
            state.habitNames?.push(action.payload.habitName);
            state.startDate = action.payload.startDate
            state.endDate = action.payload.endDate
    },
        removeHabit(state, action: PayloadAction<string>) {
            const newState = state.habitNames?.filter((habit) => habit !== action.payload);
            state.habitNames = newState;

        },
       addProgress(state, action: PayloadAction<{}>) {
            state.progress = {
                ...state.progress,
                ...action.payload,
            };
        },
        updateHabit: (state, action: PayloadAction<any>) => {
            if(action.payload.index === -1){
                console.log('habit does not exist')
                return state;
            }
            state.user = action.payload.uid
            state.habitNames?.splice(action.payload.index!, 1, action.payload.habitName);
            state.startDate = action.payload.startDate
            state.endDate = action.payload.endDate

        }
    }
});

export const { addHabit, removeHabit, addProgress, updateHabit } = habitSlice.actions;
export default habitSlice.reducer;
