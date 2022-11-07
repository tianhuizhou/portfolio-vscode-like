// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const project_map: { [key: string]: Project } = {
  'what_todo': {
    'version': '1.0',
    'path': 'what_todo',
    'name': 'What-todo',
    'avatar': 'icons/to-do-list.png',
    'cover': 'logos/wtd_logo.svg',
    'intro': 'Project management system to track tasks with your team.',
    'url': 'https://dotodo-567.web.app/',
    'github': 'https://github.com/tianhuizhou/what-to-do',
    'details': [
      {
        'title': 'Overview of the project features',
        'description':
          'Designed and developed a scalable Project Management system What-ToDo that support team to manage project, workflow, or task tracking with real time communication and content control',
        'images': [],
      },
      {
        'title': 'User Authentication',
        'description': 'Support both of JWT authentication and OAuth(only config Gmail in demo)',
        'images': [
          'https://bobdev-s3.s3.us-west-1.amazonaws.com/what_todo/wtd-img-7.png',
          'https://bobdev-s3.s3.us-west-1.amazonaws.com/what_todo/wtd-img-8.png',
        ],
      },
      {
        'title': 'Project Management',
        'description':
          'Be able to scope your team members for each project, and structure your project by three tiers such as <code>Project, Board, Task</code>',
        'images': [
          'https://bobdev-s3.s3.us-west-1.amazonaws.com/what_todo/wtd-img-1.png',
          'https://bobdev-s3.s3.us-west-1.amazonaws.com/what_todo/wtd-img-5.png',
          'https://bobdev-s3.s3.us-west-1.amazonaws.com/what_todo/wtd-img-2.png',
          'https://bobdev-s3.s3.us-west-1.amazonaws.com/what_todo/wtd-img-4.png',
        ],
      },
      {
        'title': 'Simple Drag&Drop interaction in Realtime communication',
        'description':
          'Easily drag and drop your tasks or boards to customise your own workspaces, and updating data in realtime',
        'images': [
          'https://bobdev-s3.s3.us-west-1.amazonaws.com/what_todo/wtd-img-3.png',
          'https://bobdev-s3.s3.us-west-1.amazonaws.com/what_todo/wtd-img-6.png',
        ],
      },
    ],
    'architecture': [
      {
        'name': 'Tech stack',
        'description': `
<ul>
<li>The project is written in Typescript.</li> 
<li> Using Vue.js for Frontend development; Express.js for Backend development. Firestore, Plantscale(MySQL), Prisma to support database.</li>
<li> Mainly AWS and Docker for DevOps, Firebase for providing free tier OAuth and realtime database</li></ul>
`,
        'icons': [
          'vuejs-original',
          'nodejs-original',
          'typescript-original',
          'express-original',
          'firebase-plain',
          'aws-original',
          'mysql-original',
          'prisma-original',
        ],
        'images': [],
      },
      {
        'name': 'Database design',
        'description':
          'Initial database design to satisfy the features and functionalities of the minimal visible product',
        'icons': [],
        'images': ['https://bobdev-s3.s3.us-west-1.amazonaws.com/what_todo/database.png'],
      },
    ],
  },
}

function getAllProjects(): Project[] {
  return Object.values(project_map)
}

function getProjectByName(name: string): Project {
  return (
    project_map[name] ?? {
      'version': '',
      'path': '',
      'name': '',
      'avatar': '',
      'cover': '',
      'intro': '',
      'url': '',
      'github': '',
      'details': [],
      'architecture': [],
    }
  )
}

export { getAllProjects, getProjectByName }
