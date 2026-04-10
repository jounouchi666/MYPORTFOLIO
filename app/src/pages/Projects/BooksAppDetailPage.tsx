import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

export default function BooksAppDetailPage() {
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <>
      <title>Portfolio - BooksApp</title>
      <section className="py-8 max-w-4xl">
        <h1 className="text-3xl font-serif first-letter:text-primary mb-2 tracking-widest">
          書籍管理アプリ
        </h1>
        <p className="text-muted-foreground mb-6">
          DDD / Clean Architecture を Laravel で実装
        </p>

        {/* Links */}
        <div className="flex gap-4 text-sm mb-4">
          <a
            href="https://github.com/jounouchi666"
            target="_blank"
            className="text-primary hover:underline"
          >
            GitHub →
          </a>
        </div>

        {/* Live Demo */}
        <div className="mb-10">
          <div>
            <a
              href="https://books-app-z5ig.onrender.com"
              target="_blank"
              className="text-green-400 hover:underline flex items-center gap-1"
            >
              Live <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div
            className={cn(
              'pt-1 px-2 pt-1shadow-sm overflow-hidden',
              'transition-all duration-300'
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <p className="text-primary text-sm cursor-default">Demo Account</p>
            <div
              className={cn(
                'overflow-hidden transition-all duration-500',
                hovered
                  ? 'max-h-48 opacity-100'
                  : 'max-h-0 opacity-0'
              )}
            >
              <div className="text-sm space-y-2 pl-3 mt-1 border-l-2 border-primary/50">
                <p className="text-xs">email: guest@example.com</p>
                <p className="text-xs">password: password123</p>
              </div>
            </div>
          </div>
        </div>
        

        {/* 概要 */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-3">概要</h2>
          <p className="text-muted-foreground leading-relaxed">
            LaravelのMVC構造におけるロジック分散問題を解決するため、
            ドメイン駆動設計とクリーンアーキテクチャを導入したアプリケーション。
            ビジネスロジックをUseCaseに集約し、フレームワーク依存を排除した設計を検証。
          </p>
        </section>

        {/* 課題 */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-3">課題</h2>
          <ul className="text-muted-foreground space-y-2 list-disc pl-5">
            <li>Controller / Model にロジックが分散</li>
            <li>テスト困難・変更耐性の低さ</li>
            <li>認可ロジックの分散</li>
          </ul>
        </section>

        {/* 解決 */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-3">解決アプローチ</h2>
          <ul className="text-muted-foreground space-y-2 list-disc pl-5">
            <li>UseCase中心の設計へ移行</li>
            <li>Domain層をフレームワークから完全分離</li>
            <li>認可をUseCaseに統合</li>
          </ul>
        </section>

        {/* アーキテクチャ */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-3">Architecture</h2>

          <pre className="bg-secondary p-4 rounded text-sm overflow-x-auto">
{`Presentation (Controller)
        ↓
Application (UseCase / DTO / Auth)
        ↓
Domain (Entity / ValueObject)
        ↓
Infrastructure (Eloquent / Adapter)`}
          </pre>

          <p className="text-muted-foreground mt-3">
            依存関係は常に内側へ向かうように設計。
          </p>
        </section>

        {/* 特徴 */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-3">特徴</h2>
          <ul className="text-muted-foreground space-y-2 list-disc pl-5">
            <li>UseCaseにビジネスロジックを集約</li>
            <li>Repositoryパターンによる依存逆転</li>
            <li>CQRS的なQuery分離</li>
            <li>認可ロジックの一元化</li>
          </ul>
        </section>

        {/* 技術 */}
        <section>
          <h2 className="text-xl font-medium mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['Laravel', 'DDD', 'Clean Architecture', 'MySQL', 'Docker'].map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </section>

      {/* 導線 */}
      <div className="flex gap-6 text-sm">
        <Link to="/projects" className="text-primary hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </>
  )
}