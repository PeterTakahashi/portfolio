import { type Role } from '@/type/role'

export const resume: Array<Role> = [
  {
    company: 'Kids mob Inc',
    title: 'Project management & Tech lead',
    start: '2024-04',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
    description: `
      Tech stack: Rails 8, Ruby 3, MySQL, AWS ECS\n
      System Detail: The company had a old gymnastics classroom system which is made by Google speadsheet and GAS. I migrated the system to Rails during collaborate with owner of the company. the system is so complex that has many features and models.\n
      Job Detail:
        - Communicated with stakeholders to gather and define business requirements  
        - Created requirement specifications and design documents  
        - Developed web systems using Ruby on Rails  
        - Built infrastructure on AWS ECS  
        - Implemented automated tests with RSpec  
        - Performed comprehensive integration testing  
    `,
  },
  {
    company: 'Photosynth Inc',
    title: 'FullStack Developer with React and Rails',
    start: '2023-11',
    end: '2025-3',
    description: `
      Tech stack: Ruby on Rails, AWS, Vue, NuxtJS, React\n
      System Detail: Smartlock management system, Identity management system, Visitor reception system\n
      Job Detail: Develop and maintain the application from system design to development, testing with rspec.
    `,
  },
  {
    company: 'Paiza Inc',
    title: 'Rails Developer',
    start: '2023-04',
    end: '2023-09',
    description: `
      Tech stack: Rails, MySQL, AWS\n
      System Detail: A game service for software engineers.\n
      Job Detail: The company offers recruitment services for engineers, and I developed a game service designed to attract engineering talent.
    `,
  },
  {
    company: 'Taisei Inc',
    title: 'Rails Developer',
    start: '2020-09',
    end: '2023-03',
    description: `
      Tech stack: Rails, MySQL, Azure\n
      System Detail: Collaborated with Microsoft and other system integrators to develop LCMC, a building facility management system.\n
      Job Detail: Develop and maintain the application from system design to development, testing with rspec.
    `,
  },
  {
    company: 'NexTone Systems Inc',
    title: 'Rails Developer',
    start: '2021-01',
    end: '2021-06',
    description: `
      Tech stack: Rails, MySQL, AWS\n
      System Detail: Music distribution platform in Japan\n
      Job Detail: Develop and maintain the application from system design to development, testing with rspec.
    `,
  },
  {
    company: 'Antaa Inc',
    title: 'FullStack Developer',
    start: '2020-04',
    end: '2020-12',
    description: `
      Tech stack: Rails, React, React Native, AWS\n
      System Detail: Doctor social networking application\n
      Job Detail: Develop and maintain the application from system design to development, testing with rspec.
    `,
  },
  {
    company: 'Shuttlerock',
    title: 'Rails Developer',
    start: '2020-01',
    end: '2020-03',
    description: `
      Tech stack: Rails, Heroku, MySQL\n
      System Detail: Twitter retweet campaign management system\n
      Job Detail: Developed and maintained the web application
    `,
  },
  {
    company: 'Wemotion Inc',
    title: 'FullStack Developer',
    start: '2019-04',
    end: '2020-12',
    description: `
      Tech stack: Rails, React, AWS, Wordpress, Heroku, MySQL, PostgreSQL\n
      System Detail: Programming school management system.\n
      Job Detail: Developed and maintained the web application, and work as a teacher for students.
    `,
  },
  {
    company: 'Dateup Inc',
    title: 'Rails Developer',
    start: '2018-04',
    end: '2019-03',
    description: `
      Tech stack: Rails, Python, Pandas\n
      System Detail: Database management of vendors, wholesalers, and retailers of PCs and PC peripherals\n
      Job Detail:
        - Creating and editing product information in Excel  
        - Creating and editing product information in MySQL  
        - Developing an internal management system with Ruby on Rails  
        - Communicating with clients via email and phone  
        - Aggregating and processing data with Pandas  
    `,
  },
]
