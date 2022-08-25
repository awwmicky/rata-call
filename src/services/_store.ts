import create from 'zustand'
import { devtools } from 'zustand/middleware'
// { StateCreator, StoreApi }

// const middlewares = (cb: object) => devtools(persist(cb))

interface IObject { [key: string]: any }
// type TResults = unknown | unknown[] | null
type TResults = {
	metadata?: {
		statusCode: number
		statusText: string
		durationTime: string
		payloadSize: string
	}
	headers?: {
		key: string
		value: string
	}[]
	data?: IObject | IObject[]
} | undefined

interface IRecords {
	query?: IObject
	// params: undefined
	body?: IObject
	// headers: undefined
}

interface IState {
	results: TResults
	records: IRecords
}

interface IAction {
  newResults: (res: TResults) => void
	updateRecords: (entry: IObject | undefined, format: string) => void
}

type TGlobalStore = IState & IAction
type TMiddleware = [ ['zustand/devtools', never] ]
// ['zustand/persist', TResultsStore]

const useGlobalStore = create<TGlobalStore, TMiddleware>( devtools((set) => ({
	results: undefined,
	records: {
		query: undefined,
		// params: undefined,
		body: undefined,
		// headers: undefined,
	},

	newResults (results) {
		// console.info('[💾 new results]', results)
    set((state) => ({ ...state, results }))
	},

	updateRecords (entry, format) {
		// console.info('[💽 new records]', entry, format)
		switch (format) {
			case 'query':
				set((state) => ({ ...state, records: { ...state.records, query: entry } }))
				break
			case 'body':
				set((state) => ({ ...state, records: { ...state.records, body: entry } }))
				break
			default: set((state) => (state))
		}
	},
}), { name: 'global_store' }))

export { useGlobalStore }
