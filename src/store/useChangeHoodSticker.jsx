import { create } from "zustand";

const useChangeHoodSticker = create((set) =>({
    hoodSticker: null,
    setNewHoodSticker: (newHoodSticker) => set({hoodSticker: newHoodSticker})
}))

export default useChangeHoodSticker;