import { describe, expect, it } from 'vitest'
import { retrieveProjectsForUser } from '../../src/service/projectService'
import type { Project } from '../../src/models/Project'

describe('projectService', () => {
  it('retrieveProjectsForUser should return projects', async () => {
    const expected = [
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
      }
    ]

    const response: Project[] = retrieveProjectsForUser()

    expect(expected).toEqual(response)
  })
})
