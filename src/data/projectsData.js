import { v4 as uuid } from 'uuid'

const projects = [
  {
    id: uuid(),
    name: 'GProG',
    description:
      'Web app that provides a gastronomic consulting service, such as recipes standarization, calculation of costs per dish based on ingredients and fixed costs of the restaurant, a balance sheet that shows a projection of the financial part along the time using the new model of the restaurant. \n It also generates all the information in ready to print PDF documents',
    technologies: [
      'VueJS',
      'C#',
      '.NET Core',
      'SignalR',
      'REST API',
      'Docker',
      'MongoDB',
    ],
    image: 'http://navizm.com/images/gprog3.png',
    liveDemoUrl: 'http://gprog.algerzm.me/',
    codeUrl: 'http://github.com/algerzm/gprog',
  },
  {
    id: uuid(),
    name: 'MERN Tasks',
    description:
      'Simple Page Application that helps you to organizate tasks of different projects, you can add, modify and delete projects and tasks of each project, it communicates with a REST API made with Express and NodeJS.',
    technologies: [
      'React JS',
      'NodeJS',
      'REST API',
      'Docker',
      'GraphQL',
      'Express',
      'MongoDB',
    ],
    image: 'http://navizm.com/images/merntasks.png',
    liveDemoUrl: 'http://merntasks.algerzm.me/',
    codeUrl: 'http://github.com/algerzm/gprog',
  },
  {
    id: uuid(),
    name: 'ElBollon',
    description:
      'Simple Website made for a dessert shop, it shows all the shop information, a gallery of all the desserts, also you can see a review section of different customers, and a form to order the dessert you want.',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
    image: 'http://navizm.com/images/elbollon4.png',
    liveDemoUrl: 'https://elbollon.github.io/',
    codeUrl: 'https://github.com/algerivan/ElBollon',
  },
]

export { projects }
