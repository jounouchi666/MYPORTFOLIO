import { Link } from 'react-router'

export default function ExpenseManagerDesailPage() {
  return (
    <>
      <title>Portfolio - ExpenseManager</title>
      <div className='mb-10'>
        <p>Coming Soon...</p>
      </div>
      

      {/* 導線 */}
      <div className="flex gap-6 text-sm">
        <Link to="/projects" className="text-primary hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </>
  )
}