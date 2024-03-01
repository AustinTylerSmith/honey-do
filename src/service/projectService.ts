import type { Project } from '@/models/Project'

const projects: Project[] = [
  {
    id: 1,
    title: 'Build Honey Do',
    nextAction: 'Open',
    tasks: [
      {
        description: 'My Task 1',
        finished: true
      },
      {
        description: 'My Task 2',
        finished: false
      },
      {
        description: 'My Task 3',
        finished: false
      }
    ],
    blockers: [
      {
        description: 'blocked',
        timePassed: '3 hours and 20 minutes'
      }
    ],
    notes: 'note test note',
    completed: false,
    communication: []
  },
  {
    id: 2,
    title: 'Make House Plan',
    nextAction: 'Open',
    tasks: [
      {
        description: 'My Task 1',
        finished: true
      },
      {
        description: 'My Task 2',
        finished: true
      },
      {
        description: 'My Task 3',
        finished: false
      }
    ],
    blockers: [
      {
        description: 'blocked',
        timePassed: '3 hours and 20 minutes'
      }
    ],
    notes: 'note test note',
    completed: false,
    communication: []
  },
  {
    id: 3,
    title: 'Build House',
    nextAction: 'Close',
    tasks: [
      {
        description: 'My Task 1',
        finished: false
      },
      {
        description: 'My Task 2',
        finished: false
      },
      {
        description: 'My Task 3',
        finished: false
      }
    ],
    blockers: [
      {
        description: 'blocked',
        timePassed: '3 hours and 20 minutes'
      }
    ],
    notes: 'note test note',
    completed: false,
    communication: []
  },
  {
    id: 4,
    title: 'Complete Coding Bootcamp',
    nextAction: 'Re Open',
    tasks: [
      {
        description: 'My Task 1',
        finished: true
      },
      {
        description: 'My Task 2',
        finished: true
      },
      {
        description: 'My Task 3',
        finished: true
      }
    ],
    blockers: [
      {
        description: 'blocked',
        timePassed: '3 hours and 20 minutes'
      }
    ],
    notes: 'note test note',
    completed: true,
    communication: []
  }
]

function retrieveProjectsForUser(): Project[] {
  return projects
}

function getProjectById(id: number): Project | null {
  for (const project of projects) {
    if (project.id === id) {
      return project
    }
  }
  return null
}

export { retrieveProjectsForUser, getProjectById}
