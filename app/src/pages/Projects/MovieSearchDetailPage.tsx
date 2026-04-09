export function MovieSearchDetailPage() {
  return (
    <section className="py-8 max-w-4xl">
      <h1 className="text-3xl font-serif first-letter:text-primary mb-2 tracking-widest">
        映画検索SPA
      </h1>
      <p className="text-muted-foreground mb-6">
        Laravel API + React による外部API連携アプリ
      </p>

      {/* Links */}
      <div className="flex gap-4 text-sm mb-10">
        <a
          href="https://github.com/jounouchi666/MovieSearch"
          target="_blank"
          className="text-primary hover:underline"
        >
          GitHub →
        </a>
      </div>

      {/* 概要 */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">概要</h2>
        <p className="text-muted-foreground leading-relaxed">
          TMDb APIを利用した映画検索SPA。
          外部API依存の影響範囲を最小化するため、バックエンドで抽象化を行い、
          フロントと責務を明確に分離した構成。
        </p>
      </section>

      {/* 課題 */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">課題</h2>
        <ul className="text-muted-foreground space-y-2 list-disc pl-5">
          <li>外部API仕様変更の影響が広範囲に及ぶ</li>
          <li>フロントとバックエンドの責務が曖昧</li>
          <li>HTTP処理とビジネスロジックの混在</li>
        </ul>
      </section>

      {/* 解決 */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">解決アプローチ</h2>
        <ul className="text-muted-foreground space-y-2 list-disc pl-5">
          <li>Repositoryで外部APIを抽象化</li>
          <li>Mapper / Converterでレスポンス整形</li>
          <li>UseCase中心の設計</li>
        </ul>
      </section>

      {/* アーキテクチャ */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">Architecture</h2>

        <pre className="bg-secondary p-4 rounded text-sm overflow-x-auto">
{`Frontend (React)
        ↓
Laravel API
        ↓
UseCase
        ↓
Repository
        ↓
TMDb API`}
        </pre>

        <p className="text-muted-foreground mt-3">
          外部API依存はInfrastructureに閉じ込め、上位層は抽象化されたデータのみ扱う。
        </p>
      </section>

      {/* 特徴 */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-3">特徴</h2>
        <ul className="text-muted-foreground space-y-2 list-disc pl-5">
          <li>API依存の完全隔離</li>
          <li>SPA + APIの責務分離</li>
          <li>CQRS的Read特化設計</li>
          <li>UseCase単体テスト可能</li>
        </ul>
      </section>

      {/* 技術 */}
      <section>
        <h2 className="text-xl font-medium mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {['Laravel', 'React', 'TypeScript', 'API', 'Docker'].map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </section>
  )
}