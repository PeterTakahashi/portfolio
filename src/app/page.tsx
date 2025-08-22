import { Container } from '@/components/Container'
import { getAllArticles } from '@/lib/articles'
import { Article } from '@/components/Article'

import { SocialLinks } from '@/components/SocialLinks'

import { Resume } from '@/components/Resume'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software engineer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Seiya Takahashi. A software engineer based in Tokyo, Japan.
            Mainly working on rails web backend and react frontend. but I love
            to learn new things and try to build open source projects with
            Solidity, FastAPI, Python, SwiftUI, and more.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLinks />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
