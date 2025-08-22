import { type Role } from '@/type/role'

export const resume: Array<Role> = [
  {
    company: 'Planetaria',
    title: 'CEO',
    start: '2019-01',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
    description: "Leading the development of innovative space exploration technologies.",
  },
  {
    company: 'Airbnb',
    title: 'Product Designer',
    start: '2014-01',
    end: '2019-01',
    description: "Leading the development of innovative space exploration technologies.",
  },
]
