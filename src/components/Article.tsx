'use client'

import { Card } from '@/components/Card'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { StarIcon, ForkIcon } from '@/components/GitHubIcon'
import { useState, useEffect } from 'react'

export function Article({ article }: { article: ArticleWithSlug }) {
  const [stars, setStars] = useState<number | null>(null)
  const [forks, setForks] = useState<number | null>(null)

  useEffect(() => {
    async function fetchGitHubData() {
      if (article.githubOwner && article.githubRepo) {
        try {
          const response = await fetch(
            `https://api.github.com/repos/${article.githubOwner}/${article.githubRepo}`,
          )
          if (response.ok) {
            const data = await response.json()
            setStars(data.stargazers_count)
            setForks(data.forks_count)
          }
        } catch (error) {
          console.error('Error fetching GitHub data:', error)
        }
      }
    }

    fetchGitHubData()
  }, [article.githubOwner, article.githubRepo])

  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title
          href={`https://github.com/${article.githubOwner}/${article.githubRepo}`}
        >
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>
          <div className="flex items-center gap-2">
            README on github
            {stars !== null && (
              <div className="flex items-center gap-1">
                <StarIcon className="h-4 w-4 text-zinc-500" />
                <span>{stars}</span>
              </div>
            )}
            {forks !== null && (
              <div className="flex items-center gap-1">
                <ForkIcon className="h-4 w-4 text-zinc-500" />
                <span>{forks}</span>
              </div>
            )}
          </div>
        </Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 max-md:hidden"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}
