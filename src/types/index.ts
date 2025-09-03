import { ReactNode } from 'react'

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
  id?: string
  'data-testid'?: string
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'

export interface ComponentMeta {
  name: string
  description: string
  category: string
  props: Record<string, any>
  examples: ComponentExample[]
}

export interface ComponentExample {
  name: string
  description: string
  code: string
  props?: Record<string, any>
}