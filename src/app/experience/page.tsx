import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Experience as ExperienceComponent } from '@/components/Experience'
import { resume } from '@/data/resume'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'I have experience in Rails web development and React for 8 years.',
}

export default function Experience() {
  return (
    <SimpleLayout
      title='Experience'
      intro="I have experience in Rails web development and React for 8 years. mainly I've worked as freelance developer."
    >
      <div className="space-y-20">
        {resume.map((role, roleIndex) => (
          <ExperienceComponent key={roleIndex} role={role} />
        ))}
      </div>
    </SimpleLayout>
  )
}
