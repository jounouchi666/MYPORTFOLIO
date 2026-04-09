import { Link } from 'react-router'

export function ArchitecturePage() {
  return (
    <section className="py-8 max-w-5xl">

      {/* タイトル */}
      <h1 className="font-serif text-3xl text-foreground first-letter:text-primary mb-2 tracking-widest">
        Architecture
      </h1>
      <p className="text-muted-foreground mb-10">
        設計思想とプロジェクト横断でのアーキテクチャの進化
      </p>

      {/* Principles */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">Design Principles</h2>

        <ul className="space-y-2 text-sm text-foreground/80 leading-relaxed">
          <li>ドメインロジックをフレームワークから分離</li>
          <li>UseCase中心のアプリケーション設計</li>
          <li>依存方向を内側（Domain）へ統一</li>
          <li>副作用をInfrastructureへ隔離しテスタビリティを確保</li>
        </ul>
      </section>

      {/* 共通構造 */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">Common Architecture</h2>

        <pre className="bg-card border border-border rounded-lg p-6 font-mono text-sm text-foreground/80 leading-relaxed">
{`Presentation (Controller / UI)
        ↓
Application (UseCase)
        ↓
Domain (Entity / ValueObject)
        ↓
Infrastructure (DB / API / Framework)`}
        </pre>

        <p className="text-xs text-muted-foreground mt-3">
          ※ MovieSearchはRead特化のためDomain層を省略
        </p>
      </section>

      {/* 進化 */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">Architecture Evolution</h2>

        <div className="grid gap-6 md:grid-cols-3">

          {/* CI4 */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-sm mb-2 text-foreground">映画レビュー（初期）</h3>
            <p className="text-xs text-muted-foreground mb-3">
              MVCベースの実装
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              <li>Controller肥大化</li>
              <li>責務の混在</li>
              <li>テスト困難</li>
            </ul>

            <Link to="/projects/movie-reviews" className="text-xs text-primary mt-3 inline-block">
              → Detail
            </Link>
          </div>

          {/* Book */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-sm mb-2 text-foreground">書籍管理</h3>
            <p className="text-xs text-muted-foreground mb-3">
              DDD + Clean Architecture
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              <li>Domain分離</li>
              <li>UseCaseにロジック集約</li>
              <li>認可の一元化</li>
            </ul>

            <Link to="/projects/books-app" className="text-xs text-primary mt-3 inline-block">
              → Detail
            </Link>
          </div>

          {/* MovieSearch */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-sm mb-2 text-foreground">映画検索</h3>
            <p className="text-xs text-muted-foreground mb-3">
              API分離 + UseCase導入
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              <li>RepositoryでAPI抽象化</li>
              <li>UseCase中心設計</li>
              <li>SPA構成</li>
            </ul>

            <Link to="/projects/movie-search" className="text-xs text-primary mt-3 inline-block">
              → Detail
            </Link>
          </div>

        </div>
      </section>

      {/* 設計判断 */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">Design Decisions</h2>

        <ul className="text-muted-foreground space-y-2 list-disc pl-5">
          <li>認可ロジックをUseCaseに集約し責務を明確化</li>
          <li>Repositoryで外部依存を抽象化し変更耐性を確保</li>
          <li>CI4ではServiceを用いてDIを代替</li>
          <li>QueryとCommandを分離し責務を単純化</li>
        </ul>
      </section>

      {/* AI */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">AI-driven Development</h2>

        <p className="text-sm text-foreground/80 leading-relaxed">
          AIによるコード生成を前提とし、設計によって生成コードの品質を担保する開発スタイルを採用。
          設計が明確であるほどAIの出力精度が向上するため、
          アーキテクチャ設計を開発効率の中核として位置付けている。
        </p>
      </section>

      {/* 導線 */}
      <div className="flex gap-6 text-sm">
        <Link to="/projects" className="text-primary hover:underline">
          ← Projects
        </Link>
        <Link to="/skills" className="text-primary hover:underline">
          Skills →
        </Link>
      </div>

    </section>
  )
}