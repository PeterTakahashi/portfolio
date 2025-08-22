import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Experience as ExperienceComponent } from '@/components/Experience'
import { resume } from '@/data/resume'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'I am a software engineer who places particular emphasis on readability, scalability, high performance, and writing bug-free code. Having worked mainly at small companies, I have gained broad experience and am capable of handling the entire development cycle independently — from system design to implementation and testing.',
}

export default function Experience() {
  return (
    <SimpleLayout
      title='Experience'
      intro="I am a software engineer who places particular emphasis on readability, scalability, high performance, and writing bug-free code. Having worked mainly at small companies, I have gained broad experience and am capable of handling the entire development cycle independently — from system design to implementation and testing."
    >
      <div className="space-y-20">
        {resume.map((role, roleIndex) => (
          <ExperienceComponent key={roleIndex} role={role} />
        ))}
      </div>
    </SimpleLayout>
  )
}
