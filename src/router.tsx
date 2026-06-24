import { createMemoryRouter } from 'react-router'

import { IntroScreen } from './screens/intro'
import { LessonScreen } from './screens/lesson'
import { MenuScreen } from './screens/menu'

export const router = createMemoryRouter([
  { path: '/', element: <IntroScreen /> },
  { path: '/menu', element: <MenuScreen /> },
  { path: '/lesson/:topicId', element: <LessonScreen /> },
])
