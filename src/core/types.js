/* @flow */

import { List } from 'immutable'
import type { CourseComposerState } from '../scenes/course-composer/types'
import type { CourseManagerState } from '../scenes/course-manager/types'

export type Gender = 'Male' | 'Female' | 'Other'

export type Role = 'TEACHER' | 'STUDENT'

export type NavigationState = {
  currIdx: number,
  userRole: Role
}

export type CourseFeedback = {
  author: string,
  text: string,
  rating: number
}

export type User = {
  email: string,
  firstName: string,
  lastName: string,
  registrationDate: string,
  birthday?: string,
  gender?: Gender,
  role: Role,
  courses: List<string>,
  avatarUrl?: string
}

export type Video = {
  type: 'video',
  url: string
}

export type Audio = {
  type: 'audio',
  url: string
}

export type TextHighlight = {
  length: number,
  offset: number
}

export type Text = {
  type: 'text',
  content: string,
  highlights: List<TextHighlight>
}

export type Skype = {
  type: 'skype',
  startTime: number, // number of seconds from Epoch time
  duration: number, // number of seconds,
  topic: string,
  group: boolean
}

export type WrittenAnswerEx = {
  type: 'written-answer',
  items: List<{ question: string, answer: string }>
}

export type MultiOptionEx = {
  type: 'multi-option',
  items: List<{
    question: string,
    correctIdx: string,
    options: List<string>
  }>
}

export type ActivityKind = MainActivityKind | SecondaryActivityKind

export type MainActivityKind =
  | 'video'
  | 'audio'
  | 'text'
  | 'skype'
  | 'written-answer'
  | 'multi-option'

export type MainActivity =
  | Video
  | Audio
  | Text
  | Skype
  | WrittenAnswerEx
  | MultiOptionEx

export type SecondaryActivityKind =
  | 'audio'
  | 'text'
  | 'written-answer'
  | 'multi-option'

export type SecondaryActivity = Audio | Text | WrittenAnswerEx | MultiOptionEx

export type Exercise = {
  id: string,
  name: string,
  mainActivity: MainActivity | null,
  secondaryActivity: SecondaryActivity | null
}

export type Lesson = {
  id: string,
  name: string,
  exercises: List<Exercise>
}

export type Level = {
  id: string,
  name: string,
  description: string,
  lessons: List<Lesson>
}

export type Course = {
  id: string,
  name: string,
  description: string,
  difficulty: CourseDifficulty,
  levels: List<Level>,
  image?: string
}

export type CourseDifficulty =
  | 'Beginner'
  | 'Intermediate'
  | 'Upper-intermediate'
  | 'Advanced'
  | 'Proficient'

export type AppState = {
  courseComposer: CourseComposerState,
  courseManager: CourseManagerState,
  nav: NavigationState
}

export type PromoEvent = { name: string, description: string }

export type Achievement = {
  name: string,
  description: string,
  imgUrl: string
}

export type AchievementCategory = {
  name: string,
  achievements: List<Achievement>
}
