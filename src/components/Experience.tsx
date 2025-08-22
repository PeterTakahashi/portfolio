import React from 'react'
import { type Role } from '@/type/role'
import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'

export function Experience({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string'
      ? formatDate(role.start, { day: undefined })
      : role.start.label
  let startDate =
    typeof role.start === 'string'
      ? formatDate(role.start)
      : role.start.dateTime

  let endLabel =
    typeof role.end === 'string'
      ? formatDate(role.end, { day: undefined })
      : role.end.label
  let endDate =
    typeof role.end === 'string' ? formatDate(role.end) : role.end.dateTime

  return (
    <>
      <Card as="article">
        <Card.Title as="h3">
          {role.title} - {role.company}
        </Card.Title>
        <Card.Eyebrow decorate>
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </Card.Eyebrow>
        <Card.Description>
          {typeof role.description === 'string'
            ? role.description
                .replace(/<br\s*\/?>(\n)?/gi, '\n')
                .split(/\n/)
                .map((line, idx, arr) =>
                  idx < arr.length - 1 ? (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={idx}>{line}</React.Fragment>
                  ),
                )
            : role.description}
        </Card.Description>
      </Card>
    </>
  )
}
