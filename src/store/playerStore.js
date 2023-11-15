import { create } from 'zustand'

export const usePlayerStore = create((set) => {
  return {
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    volume: 0.5,
    setVolume: (volume) => set({ volume })
  }
})
