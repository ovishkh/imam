"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import ContentGrid from "@/components/content-grid"
import PromptSection from "@/components/prompt-section"

export default function Home() {
  const [prompt, setPrompt] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim()) {
      console.log("Submitted:", prompt)
      setPrompt("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full">
        {/* Hero Section with Prompt */}
        <PromptSection prompt={prompt} setPrompt={setPrompt} onSubmit={handleSubmit} />

        {/* Content Grid Section */}
        <ContentGrid />
      </main>
    </div>
  )
}
