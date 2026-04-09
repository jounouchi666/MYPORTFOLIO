import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router'

type Work = {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  architecture: string
  tags: string[]
  status: 'Completed' | 'In Progress' | 'Planned'
  github?: string
  demo?: string
  link?: string
};

const statusStyle = {
  Completed: 'border-green-500/40 text-green-400',
  'In Progress': 'border-yellow-500/40 text-yellow-400',
  Planned: 'border-muted-foreground/30 text-muted-foreground',
};

const works: Work[] = [
  {
    id: 'books-app',
    title: '書籍管理',
    description: 'DDD / Clean ArchitectureをLaravelで実装した書籍管理アプリ',
    problem:
      'LaravelのMVCではビジネスロジックが分散し、変更耐性やテスト性が低下する',
    solution:
      'UseCase中心の設計とDomain層の分離により、責務を明確化し保守性を向上',
    architecture:
      'Application / Domain / Infrastructureの層分離 + Repositoryパターン + UseCase内認可制御',

    tags: ['Laravel', 'DDD', 'Clean Architecture', 'UseCase', 'CQRS'],
    status: 'Completed',
    github: 'https://github.com/jounouchi666/books_app_laravel_ddd',
    demo: 'https://books-app-z5ig.onrender.com',
    link: '/projects/books-app',
  },

  {
    id: 'movie-search',
    title: '映画検索SPA',
    description: 'TMDb APIを利用したLaravel API + React構成の映画検索アプリ',
    problem:
      '外部APIの仕様変更・エラーハンドリングがアプリ全体に波及する',
    solution:
      'Repository + Mapper + ConverterでAPI依存を隔離し、UseCaseから抽象化',
    architecture:
      'Laravel API（UseCase中心）+ React SPA分離構成 / CQRS的Read特化設計',
    tags: ['Laravel', 'React', 'TypeScript', 'API', 'SPA'],
    status: 'Completed',
    github: 'https://github.com/jounouchi666/MovieSearch',
    link: '/projects/movie-search',
  },
  {
    id: 'movie-review',
    title: '映画レビュー管理',
    description: '映画レビューを管理するCRUDアプリ',
    problem: 'シンプルCRUDでも責務が曖昧になりやすい',
    solution: 'MVCの責務分離を明確化',
    architecture: 'CodeIgniter4による軽量構成',
    tags: ['CI4', 'MVC', 'API', 'MySQL'],
    status: 'In Progress',
    github: 'https://github.com/jounouchi666/ci4-movie-reviews',
    link: '/projects/movie-reviews',
  },
];

export function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-8">
      <h2 className="font-serif text-3xl text-foreground first-letter:text-primary mb-2 tracking-widest">
        Projects
      </h2>
      <p className="text-muted-foreground mb-8">課題解決ベースの開発実績</p>

      <div className="grid gap-4">
        {works.map((work, index) => (
          <div
            key={work.id}
            className={cn(
              'bg-card border border-border rounded-xl py-6 shadow-sm overflow-hidden',
              'transition-all duration-300',
              hoveredIndex === index && 'border-primary/30'
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="px-6">

              {/* タイトル */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    {work.title}
                  </h3>

                  {/* ステータス */}
                  <span
                    className={cn(
                      'inline-block text-xs px-2 py-0.5 rounded border mt-1',
                      statusStyle[work.status]
                    )}
                  >
                    {work.status}
                  </span>
                </div>
              </div>

              {/* 説明 */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {work.description}
              </p>

              {/* 詳細（hover） */}
              <div
                className={cn(
                  'overflow-hidden transition-all duration-500',
                  hoveredIndex === index
                    ? 'max-h-48 opacity-100 mb-4'
                    : 'max-h-0 opacity-0'
                )}
              >
                <div className="text-sm space-y-2 pl-3 border-l-2 border-primary/50">
                  <p><span className="text-primary">課題:</span> {work.problem}</p>
                  <p><span className="text-primary">解決:</span> {work.solution}</p>
                  <p><span className="text-primary">設計:</span> {work.architecture}</p>
                </div>
              </div>

              {/* タグ */}
              <div className="flex flex-wrap gap-2 mb-3">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 導線 */}
              <div className="flex gap-4 text-xs">
                {work.link && (
                  <Link to={work.link} className="text-primary hover:underline">
                    Detail →
                  </Link>
                )}

                {work.github && (
                  <a
                    href={work.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    GitHub →
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}