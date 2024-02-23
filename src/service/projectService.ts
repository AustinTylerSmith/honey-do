import type { Project } from '@/models/Project'

const projects:Project[] = [
  {
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

export { retrieveProjectsForUser }
