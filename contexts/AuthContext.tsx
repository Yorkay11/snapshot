"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { toast } from "sonner"

interface AuthContextType {
  isAuthenticated: boolean
  isConnecting: boolean
  walletAddress: string | null
  connectWallet: () => Promise<void>
  disconnectWallet: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const connectWallet = async () => {
    try {
      setIsConnecting(true)

      if (!window.ultra) {
        toast.error("Extension not found", {
          description: "Please install the Ultra Wallet extension to continue.",
          action: {
            label: "Install Extension",
            onClick: () => window.open('https://chromewebstore.google.com/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln?hl=en%20(', '_blank')
          },
          duration: 5000,
        })
        return
      }

      const accounts = await window.ultra.connect()
      
      if (accounts && accounts.length > 0) {
        setIsAuthenticated(true)
        setWalletAddress(accounts[0])
        toast.success("Wallet Connected", {
          description: `Successfully connected to ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
          duration: 3000,
        })
      } else {
        toast.error("Connection Failed", {
          description: "No accounts found in your wallet.",
          duration: 3000,
        })
      }
    } catch (err) {
      toast.error("Connection Error", {
        description: err instanceof Error ? err.message : "Failed to connect wallet",
        duration: 3000,
      })
      console.error("Wallet connection error:", err)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = async () => {
    try {
      if (window.ultra) {
        await window.ultra.disconnect()
        setIsAuthenticated(false)
        setWalletAddress(null)
        toast.success("Wallet Disconnected", {
          description: "Your wallet has been successfully disconnected.",
          duration: 3000,
        })
      }
    } catch (err) {
      toast.error("Disconnection Error", {
        description: "Failed to disconnect wallet",
        duration: 3000,
      })
      console.error("Wallet disconnection error:", err)
    }
  }

  // Vérifier si le wallet est déjà connecté au chargement
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ultra) {
        try {
          const accounts = await window.ultra.connect()
          if (accounts && accounts.length > 0) {
            setIsAuthenticated(true)
            setWalletAddress(accounts[0])
          }
        } catch (err) {
          console.error("Failed to check wallet connection:", err)
        }
      }
    }

    checkConnection()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isConnecting,
        walletAddress,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 