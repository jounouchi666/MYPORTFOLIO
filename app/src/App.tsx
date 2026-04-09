import { Routes, Route, Navigate } from 'react-router'
import { Layout } from './layouts/Layout'
import { ProfilePage } from './pages/ProfilePage'
import { SkillsPage } from './pages/SkillsPage'
import { ProjectsPage } from './pages/ProjectsPage'
import BooksAppDetailPage from './pages/Projects/BooksAppDetailPage'
import MovieSearchDetailPage from './pages/Projects/MovieSearchDetailPage'
import MovieReviewsDetailPage from './pages/Projects/MovieReviewsDetailPage'
import ExpenseManagerDesailPage from './pages/Projects/ExpenseManagerDesailPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/profile" replace />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/books-app" element={<BooksAppDetailPage />} />
        <Route path="projects/movie-search" element={<MovieSearchDetailPage />} />
        <Route path="projects/movie-reviews" element={<MovieReviewsDetailPage />} />
        <Route path="projects/expense-manager" element={<ExpenseManagerDesailPage />} />
      </Route>
    </Routes>
  )
}
