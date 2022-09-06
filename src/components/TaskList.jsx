import React from 'react'
import Task from './Task'

const tasksData = [
  {
    id: 1,
    title: 'FT: Refocus Button That Opened Modal',
    ptUrl: 'https://www.pivotaltracker.com/n/projects/2198983/stories/183169458',
    mrUrl: 'https://gitlab.symplicity.com/symplicity/advocate/-/merge_requests/2093',
    boxUrl: 'https://zvedovatto.advocate.74dev.symplicity.com/',
    todos: [
        {
          title: 'fix buttons position',
          done: true
        },
        {
          title: 'fix buttons position',
          done: false
        },
        {
          title: 'fix buttons position',
          done: false
        },
    ],
    startedDate: '09/09/22',
    done: true,
    finishedDate: '20/09/22',
    status: [
      {
        title: 'awaiting christians code review 1',
        done: true
      },
      {
        title: 'fixing code review ',
        done: true
      },
      {
        title: 'awaiting christians code review 2',
        done: false
      },
    ],
  },
  {
    id: 1,
    title: 'FT: Refocus Button That Opened Modal',
    ptUrl: 'https://www.pivotaltracker.com/n/projects/2198983/stories/183169458',
    mrUrl: 'https://gitlab.symplicity.com/symplicity/advocate/-/merge_requests/2093',
    boxUrl: 'https://zvedovatto.advocate.74dev.symplicity.com/',
    todos: [
        {
          title: 'fix buttons position',
          done: true
        },
        {
          title: 'fix buttons position',
          done: false
        },
        {
          title: 'fix buttons position',
          done: false
        },
    ],
    startedDate: '09/09/22',
    done: false,
    finishedDate: '',
    status: [
      {
        title: 'awaiting christians code review 1',
        done: true
      },
      {
        title: 'fixing code review ',
        done: true
      },
      {
        title: 'awaiting christians code review 2',
        done: false
      },
    ],
  }
]


function TaskList() {
  return (
    <div>
      {
        tasksData?.map((task, i) => {
          return <Task task={task} key={i} />
        })
      }
    </div>
  )
}

export default TaskList