import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import { SocialLinks } from '@/components/SocialLinks'

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Seiya Takahashi. A software engineer based in Tokyo, Japan. Mainly working on rails web backend and react frontend. but I love to learn new things and try to build open source projects with Solidity, FastAPI, Python, SwiftUI, and more.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            A software engineer.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Seiya Takahashi. A software engineer based in Tokyo, Japan. Mainly working on rails web backend and react frontend. but I love to learn new things and try to build open source projects with Solidity, FastAPI, Python, SwiftUI, and more.
            </p>
            <p>
              I am a software engineer who places particular emphasis on readability, scalability, high performance, and writing bug-free code. Having worked mainly at small companies, I have gained broad experience and am capable of handling the entire development cycle independently — from system design to implementation and testing.
            </p>
            <p>
              I have been involved in more than 30 projects so far, and in most cases no bugs were reported after release.
              Although my English is not yet at a business level, I am able to communicate to some extent.
              I&apos;m still learning English, but I can read and write technical documents.
            </p>
          </div>
        </div>
        <div className="lg:pl-20 flex gap-x-4">
          <SocialLinks />
        </div>
      </div>
    </Container>
  )
}
