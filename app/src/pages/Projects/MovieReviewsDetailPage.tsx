export default function MovieReviewsDetailPage() {
  return (
    <>
      <title>Portfolio - MovieReviews</title>
      <section className="py-8 max-w-4xl">
        <h1 className="text-3xl font-serif first-letter:text-primary mb-2 tracking-widest">
          映画レビュー管理（CI4）
        </h1>
        <p className="text-muted-foreground mb-6">
          MVCからClean Architectureへの移行過程を含むプロジェクト
        </p>

        {/* Links */}
        <div className="flex gap-4 text-sm mb-10">
          <a
            href="https://github.com/jounouchi666/ci4-movie-reviews"
            target="_blank"
            className="text-primary hover:underline"
          >
            GitHub →
          </a>
        </div>

        {/* フェーズ1 */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-3">初期設計（MVC）</h2>
          <p className="text-muted-foreground leading-relaxed">
            本プロジェクトはCodeIgniter4のMVC構成をベースに開発を開始した。
            CRUDとAjax通信を中心に実装を進めたが、
            Controllerにロジックが集約される構造となった。
          </p>
        </section>

        {/* 問題 */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-3">発生した問題</h2>
          <ul className="text-muted-foreground space-y-2 list-disc pl-5">
            <li>Controllerの肥大化（200行超）</li>
            <li>認可・バリデーション・DB操作の混在</li>
            <li>テスト困難</li>
          </ul>
        </section>

        {/* 改善 */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-3">改善アプローチ</h2>
          <p className="text-muted-foreground leading-relaxed">
            外部API連携部分を中心に、Clean Architectureを部分導入。
          </p>

          <ul className="text-muted-foreground space-y-2 list-disc pl-5">
            <li>UseCase導入（MovieSearchUseCase）</li>
            <li>Repositoryで外部API抽象化</li>
            <li>DTOでレスポンス整形</li>
          </ul>
        </section>

        {/* 学び */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-3">学び</h2>
          <ul className="text-muted-foreground space-y-2 list-disc pl-5">
            <li>MVC単体では責務分離が不十分になりやすい</li>
            <li>DIが弱いFWでは設計の工夫が必要（Services利用）</li>
            <li>設計しておくことで他プロジェクトへロジック移植が容易</li>
          </ul>
        </section>

        {/* 強調 */}
        <section className="mb-10">
          <div className="border-l-2 border-primary pl-4 text-sm text-primary">
            MovieSearchで実装した外部APIロジックを最小変更で移植可能だった点は、
            設計分離の有効性を示している。
          </div>
        </section>

        {/* 技術 */}
        <section>
          <h2 className="text-xl font-medium mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['CodeIgniter4', 'MVC', 'Ajax', 'API', 'Refactoring'].map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}