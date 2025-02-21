"use client"

import LoginButton from "./LoginButton"
import UserMenu from "./UserMenu"
import { useEffect, useState } from "react"
import { getCurrentUser } from "@/lib/actions/user"

export default function AuthNav() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getCurrentUser().then(userData => {
      setUser(userData)
    })
  }, [])

  return user ? <UserMenu user={user} /> : <LoginButton />
}