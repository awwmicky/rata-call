import { FC, ReactNode } from 'react'
import { DevTool } from '@hookform/devtools'
import { FormProvider } from 'react-hook-form'
// FormProviderProps, UseFormReturn

interface IProviderProps {
  children?: ReactNode
  methods: any // FIXME:
  dev?: boolean
}

export const FormDataProvider: FC<IProviderProps> = ({ children, methods, dev=false }) => (
  <FormProvider { ...methods }>
    { children }
    { dev && (<DevTool control={ methods?.control } placement="top-right" />) }
  </FormProvider>
)
