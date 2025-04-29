import { fieldNames } from '@/shared/config/constants'

export type Fields = keyof typeof fieldNames

export type FieldNames = Record<Fields, string>

export type FieldValues = Record<Fields, number | 'n/d'>
