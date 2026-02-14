
import { create } from "zustand";

const useChangeCarColor = create((set) => ({
    color: "#C9A227",
    setNewColor: (newColor) => set({color: newColor})
}))

export default useChangeCarColor;