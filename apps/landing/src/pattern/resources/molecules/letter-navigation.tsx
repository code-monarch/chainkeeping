"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@chainkeeping/ui"
import { useRouter } from "next/navigation"
import { X } from 'lucide-react'

export default function LetterNavigation() {
    const letters = ["#", ...Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")]
    const { push } = useRouter()
    const [selectedLetter, setSelectedLetter] = useState<string | null>(() => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash.slice(1).toUpperCase()
            return letters.includes(hash) ? hash : null
        }
        return null
    })

    const handleLetterClick = useCallback((letter: string) => {
        setSelectedLetter(letter)
        push(`#${letter}`)
    }, [push])

    const clearHash = useCallback(() => {
        setSelectedLetter(null)
        push('/', { scroll: false })
    }, [push])

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1).toUpperCase()
            setSelectedLetter(prev => {
                const newLetter = letters.includes(hash) ? hash : null
                return prev !== newLetter ? newLetter : prev
            })
        }

        window.addEventListener('hashchange', handleHashChange)

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [letters])

    return (
        <div className="w-full h-fit flex flex-wrap gap-1 justify-start lg:justify-center items-center overflow-y-hidden overflow-x-auto lg:overflow-x-hidden p-2">
            {letters.map((letter) => (
                <Button
                    key={letter}
                    variant="icon"
                    size="icon"
                    className={`w-9 h-8 text-2xl font-rubik p-0
                        ${selectedLetter === letter
                            ? 'text-secondary border-b-2 border-b-secondary'
                            : 'text-white hover:text-white hover:border-b-2 hover:border-b-secondary'
                        }`}
                    onClick={() => handleLetterClick(letter)}
                >
                    {letter}
                </Button>
            ))}
            {selectedLetter && (
                <Button
                    variant="icon"
                    size="icon"
                    className="w-9 h-8 text-white hover:text-secondary"
                    onClick={clearHash}
                    aria-label="Clear selection"
                >
                    <X size={20} />
                </Button>
            )}
        </div>
    )
}

