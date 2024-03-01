import type { Task } from '@/models/Task'
import type { Blocker } from '@/models/Blocker'
import type { Message } from '@/models/Message'

interface Project {
  id: number
  title: string
  nextAction: string
  tasks: Task[]
  blockers: Blocker[]
  notes: string
  completed: boolean
  communication: Message[]
}

export type { Project }
