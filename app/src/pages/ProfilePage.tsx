import { useEffect, useState } from 'react'
import { Blocks, ShieldCheck, Database, Check } from 'lucide-react'
import { Link } from 'react-router';

const bootMessages = [
  { text: '[INIT] Role: Backend Engineer', delay: 0 },
  { text: '[LOAD] Architecture: DDD / Clean Architecture', delay: 400 },
  { text: '[SKILL] API / DB / Automation', delay: 800 },
  { text: '[AI] Cursor / Copilot / Ollama', delay: 1200 },
  { text: '[READY] Available for development', delay: 1600 }
]

const strengths = [
  'DDDベースの設計',
  '外部API連携・データ統合',
  'Seleniumによる自動化',
  'AIを使った開発効率化',
];

const philosophies = [
  {
    icon: Blocks,
    title: '疎結合な設計',
    description:
      'DDDやクリーンアーキテクチャに基づき、変更に強い構造を設計。AIが迷わずコード生成できる状態を作ることで、開発速度と品質を両立。',
    link: '/projects/books-app',
    linkLabel: '書籍管理アプリで実装',
  },
  {
    icon: ShieldCheck,
    title: '確実な検証とデバッグ',
    description:
      '複雑な会計連携や電文ログ解析の経験から、エッジケースを網羅する検証と原因特定能力を重視。',
    link: '/projects/movie-reviews',
    linkLabel: 'API連携で実践',
  },
  {
    icon: Database,
    title: 'データ整合性への執着',
    description:
      'DB移行・運用経験をベースに、整合性とメンテナンス性を考慮したバックエンド設計を実施。',
    link: '/projects/expense-manager',
    linkLabel: '家計簿アプリで活用予定',
  },
];

const timeline = [
  {
    year: "〜2023",
    title: "医療系SE",
    points: [
      "サーバー構築・運用設計",
      "システム連携・データ整合性対応"
    ]
  },
  {
    year: "2024",
    title: "個人開発開始（Python）",
    points: [
      "Seleniumによる自動化",
      "FletでGUIアプリ開発"
    ]
  },
  {
    year: "2025",
    title: "Web開発 + 設計志向へ",
    points: [
      "Laravel / React",
      "DDD / Clean Architecture"
    ]
  },
  {
    year: "2026",
    title: "AI駆動開発",
    points: [
      "Cursor / Ollama活用",
      "設計 × AIの最適化"
    ]
  }
];

const githubActivity = {
  contributions: '',
  items: [
    '直近1年間で 2,000+ contributions を継続',
    '個人開発・学習ログをGitHubで管理',
    'Issueベースでアルゴリズム学習を記録',
    'GitHub Actionsによる自動リマインドを構築'
  ],
  url: 'https://github.com/jounouchi666'
};

export function ProfilePage() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    bootMessages.forEach((msg, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1)
      }, msg.delay)
    })

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <>
      <title>Portfolio - Profile</title>
      <section className="min-h-[calc(100vh-10rem)] flex flex-col justify-center">

        <div className="mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-widest mb-6">
            <span className="block">Backend-focused Engineer</span>
            <span className="block text-primary">DDD × AI-driven Development</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            設計・検証・自動化を軸に <br className="md:hidden" />変化に強いバックエンドシステムを構築
          </p>
        </div>

        <div className="mb-10">
          <ul className="grid gap-2 text-sm max-w-xl">
            {strengths.map((s) => (
              <li key={s} className="text-muted-foreground flex items-center gap-1">
                <Check className="w-4 h-4 flex-shrink-0"/> <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card border border-border rounded-md overflow-hidden max-w-xl">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">system.log</span>
          </div>

          <div className="p-4 font-mono text-sm">
            {bootMessages.slice(0, visibleLines).map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.text.includes('[READY]') ? 'text-primary' : 'text-muted-foreground'
                } mb-1 animate-in fade-in slide-in-from-left-2 duration-300`}
              >
                {msg.text}
              </div>
            ))}
            {visibleLines < bootMessages.length && (
              <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
            )}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-8">
        <h2 className="font-serif text-3xl text-foreground first-letter:text-primary mb-2 tracking-widest">
          Profile
        </h2>
        <p className="text-muted-foreground mb-8">設計思想 × AI駆動開発で高品質なプロダクトを構築</p>

        <div className="mb-12 max-w-3xl">
          <p className="text-foreground/90 leading-relaxed text-lg mb-4">
            医療機関向けシステムの導入SEとして4年間、サーバー構築から
            他社システム連携、運用設計まで担当。
          </p>
          <p className="text-foreground/90 leading-relaxed text-lg mb-4">
            現在はAI駆動開発を取り入れ、設計品質と開発速度の両立を重視した開発を行っています。
          </p>
        </div>

        <div className="grid gap-4">
          {philosophies.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl py-6 shadow-sm hover:border-primary/30 transition-colors"
              >
                <div className="px-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded bg-secondary">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className="text-xs text-primary mt-3 inline-block hover:underline"
                  >
                    → {item.linkLabel}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <Link
            to="/projects"
            className="text-sm text-primary hover:underline"
          >
            View Projects →
          </Link>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl text-foreground first-letter:text-primary mb-6 tracking-widest">
          Timeline
        </h2>

        <div className="space-y-6">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-6">
              <div className="w-24 text-sm text-muted-foreground">
                {item.year}
              </div>

              <div className="flex-1">
                <p className="font-medium text-foreground mb-1">
                  {item.title}
                </p>

                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* GitHub Activity */}
      <section className="mt-16 mb-10">
        <h2 className="font-serif text-2xl text-foreground first-letter:text-primary mb-6 tracking-widest">
          Development Activity
        </h2>

        <div className="bg-card border border-border rounded-xl p-6 max-w-2xl">
          <p className="text-sm text-foreground mb-3">
            {githubActivity.contributions}
          </p>

          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            {githubActivity.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <a
            href={githubActivity.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm mt-4 inline-block hover:underline"
          >
            View GitHub →
          </a>
        </div>
      </section>

      {/* 導線 */}
      <div className="flex gap-6 text-sm">
        <Link to="/projects" className="text-primary hover:underline">
          Projects →
        </Link>
      </div>
    </>
  )
}
