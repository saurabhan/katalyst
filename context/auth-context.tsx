import { auth } from '../firebase/firebase'
import { useState, useContext, useEffect, createContext } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  updateProfile
} from 'firebase/auth'
import { useRouter } from 'next/router'

interface IAuth {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  signUp: (email: string, password: string, username: string) => Promise<void>
  loading: boolean
  error: string
}

const AuthContext = createContext<IAuth>({
  user: null,
  signIn: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  loading: false,
  error: '',
})

interface ProviderProps {
  children: React.ReactNode
}

export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | ''>('')
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoading(false)
        router.push('dashboard')
      } else {
        setUser(null)
        setLoading(true)
        router.push('/')
      }
      setLoading(false)
    })
  }, [auth])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    setError('')
    await signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        setUser(credentials.user)
        setLoading(false)
        router.push('dashboard')
      })
      .catch((error) => {
        setError(error.message)
        alert(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const signUp = async (email: string, password: string, username:string) => {
    setLoading(true)
    setError('')
    await createUserWithEmailAndPassword(auth, email, password)
      .then(credentials => {
        updateProfile(credentials.user,{
          displayName: username
        })
        setUser(credentials.user)
        setLoading(false)
        router.push('dashboard')
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const logout = async () => {
    setLoading(true)
    signOut(auth)
      .then(() => {
        setUser(null)
        router.push('/')
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        logout,
        signUp,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}



