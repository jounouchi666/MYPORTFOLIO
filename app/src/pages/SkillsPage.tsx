import { Link } from "react-router";

const skillCategories = [
  {
    name: "Backend",
    skills: [
      {
        name: "Laravel",
        description: "DDDベースでのアプリケーション設計（Repository / Service分離）",
        project: {
          name: "書籍管理アプリ",
          path: "/projects/books-app"
        }
      },
      {
        name: "CodeIgniter4",
        description: "外部API（TMDb）連携を含むCRUDアプリケーション開発",
        project: {
          name: "映画レビュー",
          path: "/projects/movie-reviews"
        }
      },
      {
        name: "Flask",
        description: "Pythonでの軽量APIサーバー構築・Webアプリケーション開発"
      },
      {
        name: "Selenium",
        description: "楽天カード明細の自動取得などブラウザ操作の自動化"
      }
    ]
  },
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        description: "SPA構築・状態管理・コンポーネント設計",
        project: {
          name: "ポートフォリオ / 各プロジェクト",
          path: "/projects"
        }
      },
      {
        name: "Alpine.js",
        description: "Laravel Bladeと組み合わせた軽量なUI制御",
        project: {
          name: "書籍管理アプリ",
          path: "/projects/books-app"
        }
      },
      {
        name: "Tailwind CSS",
        description: "ユーティリティファーストでのUI設計・高速スタイリング",
        project: {
          name: "ポートフォリオ / 各プロジェクト",
          path: "/projects"
        }
      },
      {
        name: "Bootstrap",
        description: "グリッドシステムを活用したレスポンシブデザインと、定型UIの迅速な実装",
        project: {
          name: "映画レビュー",
          path: "/projects/movie-reviews"
        }
      }
    ]
  },
  {
    name: "Architecture",
    skills: [
      {
        name: "DDD",
        description: "Application / Domain / Infrastructureの層分離で実装",
        project: {
          name: "書籍管理アプリ",
          path: "/projects/books-app"
        }
      },
      {
        name: "Clean Architecture",
        description: "依存方向を制御し、ユースケース中心に設計",
        project: {
          name: "書籍管理アプリ",
          path: "/projects/books-app"
        }
      },
      {
        name: "SOLID / SRP",
        description: "責務分離を意識したクラス設計と保守性向上"
      },
      {
        name: "純粋関数",
        description: "副作用を排除しテスト容易性を高める関数設計"
      },
      {
        name: "DI（依存性注入）",
        description: "疎結合を実現するための依存関係管理"
      }
    ]
  },
  {
    name: "AI",
    skills: [
      {
        name: "Cursor / Copilot",
        description: "設計を前提としたコード生成・リファクタリング支援に活用"
      },
      {
        name: "Ollama",
        description: "ローカルLLM環境を構築しコード解析・補助に利用"
      },
      {
        name: "v0 / Bolt.new",
        description: "UIプロトタイピングとコンポーネント生成の高速化"
      },
      {
        name: "NotebookLM",
        description: "仕様・設計理解の補助および情報整理"
      }
    ]
  },
  {
    name: "Infrastructure / Database",
    skills: [
      {
        name: "Docker",
        description: "開発環境のコンテナ化・Docker Compose運用"
      },
      {
        name: "MySQL / PostgreSQL / SQL Server",
        description: "RDB設計・クエリ実装・データ整合性を考慮した設計"
      },
      {
        name: "Windows Server",
        description: "IIS環境でのアプリケーション運用経験"
      }
    ]
  }
];

export function SkillsPage() {
  return (
    <>
      <title>Portfolio - Skills</title>
      <section className="py-8">
        <h2 className="font-serif text-3xl text-foreground first-letter:text-primary mb-2 tracking-widest">Skills</h2>
        <p className="text-muted-foreground mb-8">技術スタックと技術の概要</p>


        <div className="space-y-8 mb-10">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-sm font-medium text-foreground/80 mb-4 tracking-wide uppercase">
                {category.name}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="border rounded p-3">
                    <p className="font-medium">{skill.name}</p>

                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>

                    {skill.project && (
                      <Link
                        to={skill.project.path}
                        className="text-xs text-primary mt-2 inline-block hover:underline"
                      >
                        → {skill.project.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 導線 */}
        <div className="flex gap-6 text-sm">
          <Link to="/architecture" className="text-primary hover:underline">
            ← Architecture
          </Link>
        </div>
      </section>
    </>
  );
}
