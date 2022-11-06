const project_map: { [key: string]: project } = {
  'what_todo': {
    'version': '1.0',
    'path': 'what_todo',
    'name': 'What-todo',
    'avatar': 'icons/to-do-list.png',
    'cover': 'logos/wtd_logo.svg',
    'intro': 'Project management system to track tasks with your team.',
  },
}

function getAllProjects(): project[] {
  return Object.values(project_map)
}

function getProjectByName(name: string): project {
  return (
    project_map[name] ?? {
      'version': '',
      'path': '',
      'name': '',
      'avatar': '',
      'cover': '',
      'intro': '',
    }
  )
}

export { getAllProjects, getProjectByName }
