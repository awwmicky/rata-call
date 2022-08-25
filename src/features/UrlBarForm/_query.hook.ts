import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { requestData, useGlobalStore } from '@/services'

interface IQueryProps {
	select_method: string
	url_endpoint: string
}

const queryOptions = {
	enabled: false,
  async onSuccess (_data: unknown) {
    // console.info('[api success]', data) // TODO:
    toast.success('Data resolved 🟢', { position: 'bottom-center' })
  },
  onError (_error: unknown) {
    // console.warn('[api error]', error) // TODO:
    toast.error('Data rejected 🔴', { position: 'bottom-center' })
  },
}

const useQueryData = ({ select_method, url_endpoint }: IQueryProps) => {
	const newResults = useGlobalStore((state) => state.newResults)
	const records = useGlobalStore((state) => state.records)

	const queryData = useQuery([ {
		url: url_endpoint,
		method: select_method,
		query: records.query,
		body: records.body,
	} ], requestData, queryOptions)

	const fetchData = () => queryData.refetch()

	useEffect(() => {
		if (queryData.isLoading) return
		else if (!queryData.isLoading && queryData.data) newResults(queryData.data as any) // FIXME:
		else if (queryData.isError && queryData.error instanceof Error) {
			if (queryData.error.cause) newResults(queryData.error.cause as any) // FIXME:
			else newResults({ data: queryData.error.message as any }) // FIXME:
		}
	}, [ newResults, queryData ])

	return {
		fetchData,
	}
}

export { useQueryData }
