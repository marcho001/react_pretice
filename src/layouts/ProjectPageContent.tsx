import { PropsWithChildren } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function ProjectPageContent({ children }: PropsWithChildren) {
  return (
    <div className='relative h-full'>
      <Outlet />
      <div className='absolute bottom-4 right-4'>
        <Link to={'/'}>回首頁</Link>
      </div>
    </div>
  )
}
