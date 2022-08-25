import { useEffect, useMemo, useReducer } from 'react'

interface IAsyncState<T> {
  loading?: boolean
  data?: T
  error?: Error
}

type TAsyncAction<T> =
	| { type: 'loading' }
	| { type: 'success', data: T }
	| { type: 'error', error: Error }

/*  */

// const INIT_FETCH_STATE: IAsyncState<T> = {
const INIT_FETCH_STATE = {
  data: [],
  error: Error(),
}

const reducer = <T> (
  state: IAsyncState<T>,
  action: TAsyncAction<T>
) => {
  switch (action.type) {
    case 'loading': return { ...INIT_FETCH_STATE }
    case 'success': return { ...INIT_FETCH_STATE, data: action.data }
    case 'error': return { ...INIT_FETCH_STATE, error: action.error }
    default: return state
  }
}

const useFetchData = <T> (
  url?: string,
  options?: RequestInit
) => {
  const [ state, dispatch ] = useReducer(reducer, INIT_FETCH_STATE)

  const action = useMemo(() => ({
    loading: () => dispatch({ type: 'loading' }),
    success: (data: T) => dispatch({ type: 'success', data }),
    error: (error: Error) => dispatch({ type: 'error', error }),
  }), [])

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      action.loading()

      try {
        const response = await fetch(url, options)
        if (!response.ok) throw new Error(response.statusText)
        const data = (await response.json())

        // console.warn('[api-data]', data) // TODO:
        action.success(data as T)
      } catch (error) {
        // console.warn('[api-error]', error) // TODO:
        action.error(error as Error)
      }
    }

    fetchData()
  }, [ url, options, action ])

  return {
    loading: !state.data,
    data: state.data as T,
    error: state.error,
  }
}

export { useFetchData }
