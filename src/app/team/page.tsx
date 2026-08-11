'use client'

import * as React from 'react'
import {
  allTeamMembers,
  getTeamByGeneration,
  getCurrentCoordinator,
  getCurrentAssistantCoordinator,
} from '@/data/team'
import { TeamMember } from '@/types'
import { TeamMemberCard } from '@/components/ui/team-member-card'

// ================= GENERATION HELPERS =================
const getAvailableGenerations = (): number[] => {
  const generations = [
    ...new Set(allTeamMembers.map((member) => member.generation)),
  ]
  return generations.sort((a, b) => b - a)
}

// ================= COMPONENT =================
export default function TeamPage() {
  const [selectedGeneration, setSelectedGeneration] = React.useState<
    number | 'current'
  >('current')

  const availableGenerations = getAvailableGenerations()
  const currentCoordinator = getCurrentCoordinator()
  const currentAssistantCoordinator = getCurrentAssistantCoordinator()

  const getDisplayedMembers = (): TeamMember[] => {
    if (selectedGeneration === 'current') {
      return getTeamByGeneration(Math.max(...availableGenerations))
    }
    return getTeamByGeneration(selectedGeneration as number)
  }

  const displayedMembers = getDisplayedMembers()

  // ❌ Remove leadership duplicates from grid if current selected
  const filteredMembers = displayedMembers.filter((member) => {
    if (selectedGeneration !== 'current') return true
    return (
      member.position !== 'Laboratory Coordinator' &&
      member.position !== 'Lab.Assistant Coordinator'
    )
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Our <span className="text-yellow-500">Team</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              Meet the dedicated members of the Artificial Intelligence
              Laboratory at Telkom University, working together to advance AI
              research and education.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 pb-8">
        {/* ================= CURRENT LEADERSHIP ================= */}
        {selectedGeneration === 'current' &&
          (currentCoordinator || currentAssistantCoordinator) && (
            <section className="mb-16">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-semibold text-foreground">
                  Current Leadership
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Leading our laboratory&apos;s mission and vision
                </p>
              </div>

              {/* ✅ 2 PER ROW */}
              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
                {currentCoordinator && (
                  <TeamMemberCard
                    member={currentCoordinator}
                    className="ring-2 ring-primary/20"
                  />
                )}

                {currentAssistantCoordinator && (
                  <TeamMemberCard
                    member={currentAssistantCoordinator}
                    className="ring-2 ring-primary/20"
                  />
                )}
              </div>
            </section>
          )}

        {/* ================= GENERATION DROPDOWN (Native Select) ================= */}
        <section className="mb-12 flex justify-center">
          <div className="w-64">
            <select
              className="w-full rounded-lg border bg-background px-3 py-2"
              value={selectedGeneration.toString()}
              onChange={(e) => {
                const value = e.target.value
                if (value === 'current') setSelectedGeneration('current')
                else setSelectedGeneration(Number(value))
              }}
            >
              <option value="current">Current Team</option>

              {availableGenerations.map((gen) => (
                <option key={gen} value={gen}>
                  Generation {gen}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* ================= ALL MEMBERS GRID ================= */}
        <section>
          {/* ✅ NO ROLE GROUPING */}
          {/* ✅ ALWAYS 2 PER ROW */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* ================= GENERATION INFO ================= */}
        <section className="mt-16 text-center">
          <div className="mx-auto max-w-2xl rounded-lg bg-muted/50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {selectedGeneration === 'current'
                ? `Current Team (Generation ${Math.max(...availableGenerations)})`
                : `Generation ${selectedGeneration}`}
            </h3>

            <p className="text-sm text-muted-foreground">
              {displayedMembers.length} active member
              {displayedMembers.length !== 1 ? 's' : ''}
              {selectedGeneration === 'current'
                ? ' currently leading our laboratory initiatives'
                : ' who contributed to our laboratory growth and success'}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
