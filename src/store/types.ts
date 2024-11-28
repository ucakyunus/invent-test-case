import { type store } from "@/store";
import type rootReducer from "@/store/root-reducer";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
