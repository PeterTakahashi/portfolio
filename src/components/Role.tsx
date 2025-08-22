
import { type Role } from '@/type/role'
import { formatDate } from '@/lib/formatDate'

export function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? formatDate(role.start, { day: undefined }) : role.start.label
  let startDate =
    typeof role.start === 'string' ? formatDate(role.start) : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? formatDate(role.end, { day: undefined }) : role.end.label
  let endDate = typeof role.end === 'string' ? formatDate(role.end) : role.end.dateTime

  return (
    <li className="flex gap-4">
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}
