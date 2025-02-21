"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SearchForm() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("1")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/rooms?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="check-in">Check-in</Label>
          <Input id="check-in" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="check-out">Check-out</Label>
          <Input id="check-out" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="guests">Guests</Label>
          <Input
            id="guests"
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>
        <div className="flex items-end">
          <Button type="submit" className="w-full">
            Search
          </Button>
        </div>
      </div>
    </form>
  )
}

