
import { create } from "zustand";

const useChangeCarColor = create((set) => ({
    color: "#0F0F0F",
    setNewColor: (newColor) => set({color: newColor})
}))

export default useChangeCarColor;