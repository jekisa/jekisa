'use client'

import { useState, useMemo, type ChangeEvent } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table'
import type { Project } from '@/types'

type CategoryFilter = Project['category'] | 'All'

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Web Development',
  'AI Integration',
  'Digital Marketing',
  'IT Support',
  'HR System',
]

function StatusBadge({ status }: { status: Project['status'] }) {
  const map: Record<Project['status'], { cls: string; dot: string; label: string }> = {
    Completed:   { cls: 'status-completed', dot: '#4ade80', label: 'Completed' },
    'In Progress': { cls: 'status-progress', dot: '#facc15', label: 'In Progress' },
    Planned:     { cls: 'status-planned',   dot: '#94a3b8', label: 'Planned'   },
  }
  const { cls, dot, label } = map[status]
  return (
    <span className={cls}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: dot, display: 'inline-block', flexShrink: 0 }} />
      {label}
    </span>
  )
}

async function fetchProjects(): Promise<{ data: Project[]; total: number }> {
  const res = await fetch('/api/projects')
  if (!res.ok) throw new Error('Failed to fetch projects')
  return res.json()
}

export default function Projects() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('All')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000,
  })

  const filteredData = useMemo(() => {
    if (!data?.data) return []
    if (categoryFilter === 'All') return data.data
    return data.data.filter((p) => p.category === categoryFilter)
  }, [data, categoryFilter])

  const columns = useMemo<ColumnDef<Project>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Project',
        cell: ({ row }) => (
          <div>
            <div className="font-medium text-sm" style={{ color: 'var(--text)' }}>{row.original.name}</div>
            <div className="text-xs mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>{row.original.description}</div>
          </div>
        ),
        size: 300,
      },
      {
        accessorKey: 'category',
        header: 'Category',
        cell: ({ getValue }) => (
          <span className="tag-neutral whitespace-nowrap">{getValue<string>()}</span>
        ),
        size: 150,
      },
      {
        accessorKey: 'techStack',
        header: 'Tech Stack',
        enableSorting: false,
        cell: ({ getValue }) => (
          <div className="flex flex-wrap gap-1">
            {getValue<string[]>().slice(0, 3).map((t) => (
              <span key={t} className="tag-accent" style={{ fontSize: '0.65rem', padding: '1px 8px' }}>{t}</span>
            ))}
            {getValue<string[]>().length > 3 && (
              <span className="tag-neutral" style={{ fontSize: '0.65rem', padding: '1px 8px' }}>
                +{getValue<string[]>().length - 3}
              </span>
            )}
          </div>
        ),
        size: 200,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ getValue }) => <StatusBadge status={getValue<Project['status']>()} />,
        size: 120,
      },
      {
        accessorKey: 'year',
        header: 'Year',
        cell: ({ getValue }) => (
          <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{getValue<number>()}</span>
        ),
        size: 70,
      },
    ],
    []
  )

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting, columnFilters, globalFilter },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 6 } },
  })

  const { pageIndex, pageSize } = table.getState().pagination
  const pageCount = table.getPageCount()
  const totalRows = table.getFilteredRowModel().rows.length
  const startRow = pageIndex * pageSize + 1
  const endRow = Math.min(startRow + pageSize - 1, totalRows)

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(232,255,71,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label fade-up">Portfolio</span>
            <h2 className="section-title fade-up" style={{ animationDelay: '0.1s' }}>
              PROJECTS
            </h2>
          </div>
          {data && (
            <p className="font-mono text-xs fade-up" style={{ color: 'var(--text-muted)', animationDelay: '0.2s' }}>
              {data.total} projects total
            </p>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 fade-up" style={{ animationDelay: '0.2s' }}>
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={globalFilter}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl font-mono text-xs outline-none transition-all duration-200"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--text)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategoryFilter(cat); table.setPageIndex(0) }}
                className="px-3 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200"
                style={{
                  background: categoryFilter === cat ? 'var(--accent-dim)' : 'var(--card-bg)',
                  color: categoryFilter === cat ? 'var(--accent)' : 'var(--text-muted)',
                  border: `1px solid ${categoryFilter === cat ? 'var(--accent-dim)' : 'var(--card-border)'}`,
                }}
              >
                {cat === 'All' ? 'All' : cat.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Table Container */}
        <div
          className="glass-card rounded-2xl overflow-hidden fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <div
                className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}
              />
              <span className="ml-3 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>Loading projects...</span>
            </div>
          )}

          {isError && (
            <div className="flex items-center justify-center py-20">
              <span className="font-mono text-xs" style={{ color: '#f87171' }}>
                Failed to load projects. Please try again.
              </span>
            </div>
          )}

          {!isLoading && !isError && (
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                          style={{ width: header.getSize() }}
                        >
                          <div className="flex items-center gap-1.5">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {header.column.getCanSort() && (
                              <span style={{ color: 'var(--accent)', fontSize: '10px' }}>
                                {header.column.getIsSorted() === 'asc'
                                  ? ' ↑'
                                  : header.column.getIsSorted() === 'desc'
                                  ? ' ↓'
                                  : ' ↕'}
                              </span>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.length === 0 ? (
                    <tr>
                      <td colSpan={columns.length} className="text-center py-16 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                        No projects found matching your filters.
                      </td>
                    </tr>
                  ) : (
                    table.getRowModel().rows.map((row) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {!isLoading && !isError && totalRows > 0 && (
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Info */}
              <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                Showing {startRow}–{endRow} of {totalRows} projects
              </span>

              {/* Page Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs transition-all"
                  style={{
                    background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                    color: table.getCanPreviousPage() ? 'var(--text)' : 'var(--text-muted)',
                    opacity: table.getCanPreviousPage() ? 1 : 0.4,
                    cursor: table.getCanPreviousPage() ? 'pointer' : 'not-allowed',
                  }}
                  aria-label="First page"
                >
                  «
                </button>
                <button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs transition-all"
                  style={{
                    background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                    color: table.getCanPreviousPage() ? 'var(--text)' : 'var(--text-muted)',
                    opacity: table.getCanPreviousPage() ? 1 : 0.4,
                    cursor: table.getCanPreviousPage() ? 'pointer' : 'not-allowed',
                  }}
                  aria-label="Previous page"
                >
                  ‹
                </button>

                {/* Page Numbers */}
                {Array.from({ length: pageCount }, (_, idx) => idx).map((pg) => (
                  <button
                    key={pg}
                    onClick={() => table.setPageIndex(pg)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs transition-all"
                    style={{
                      background: pg === pageIndex ? 'var(--accent-dim)' : 'var(--card-bg)',
                      border: `1px solid ${pg === pageIndex ? 'var(--accent-dim)' : 'var(--card-border)'}`,
                      color: pg === pageIndex ? 'var(--accent)' : 'var(--text-muted)',
                      cursor: 'pointer',
                    }}
                    aria-label={`Page ${pg + 1}`}
                  >
                    {pg + 1}
                  </button>
                ))}

                <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs transition-all"
                  style={{
                    background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                    color: table.getCanNextPage() ? 'var(--text)' : 'var(--text-muted)',
                    opacity: table.getCanNextPage() ? 1 : 0.4,
                    cursor: table.getCanNextPage() ? 'pointer' : 'not-allowed',
                  }}
                  aria-label="Next page"
                >
                  ›
                </button>
                <button
                  onClick={() => table.setPageIndex(pageCount - 1)}
                  disabled={!table.getCanNextPage()}
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs transition-all"
                  style={{
                    background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                    color: table.getCanNextPage() ? 'var(--text)' : 'var(--text-muted)',
                    opacity: table.getCanNextPage() ? 1 : 0.4,
                    cursor: table.getCanNextPage() ? 'pointer' : 'not-allowed',
                  }}
                  aria-label="Last page"
                >
                  »
                </button>
              </div>

              {/* Page Size */}
              <select
                value={pageSize}
                onChange={(e) => { table.setPageSize(Number(e.target.value)); table.setPageIndex(0) }}
                className="font-mono text-xs px-3 py-1.5 rounded-lg outline-none"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-muted)',
                }}
              >
                {[4, 6, 8, 12].map((size) => (
                  <option key={size} value={size} style={{ background: 'var(--surface)' }}>
                    {size} / page
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
