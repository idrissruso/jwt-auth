import { User } from '@/lib/types'
import { createStore } from 'zustand'

type State = {
  user: User | null
  tokens: {
    accessToken: string | null
    refreshToken: string | null
  }
  login: (user: User) => void
  logout: () => void
}
