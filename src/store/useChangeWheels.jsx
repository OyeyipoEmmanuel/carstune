import { create } from 'zustand'

const useChangeWheels = create((set) => ({
  selectedWheel: 'default', // default, sport, offroad, fancy
  setWheel: (wheel) => set({ selectedWheel: wheel }),
}))

export default useChangeWheels