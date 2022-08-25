import { getReasonPhrase } from 'http-status-codes'
import ky, { HTTPError, KyResponse } from 'ky'
import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'
import { CustomError } from 'ts-custom-error'

// https://jsonplaceholder.typicode.com/posts

/*
// headers: {
	// 'Timing-Allow-Origin': '*'
	// 'Access-Control-Allow-Headers': '*'
	// 'Access-Control-Expose-Headers': '*'
	// 'Transfer-Encoding': 'chunked',
	// 'Content-Length': '*'
// },
*/

interface IQueryData {
	queryKey: [{
		url: string
		method: string
		query?: any // FIXME:
		// { [key: string]: any }
		body?: any // FIXME:
		// { [key: string]: any }
	}]
}

class ResponseError extends CustomError {
	public constructor (
		message?: string,
		cause?: { [key: string]: any },
	) {
		super(message)
		this.cause = cause as Error
	}
}

const convertObjToArr = (data: any) => {
	const result = []
	for (const [ key, value ] of data) result.push({ key, value })
	return result
}

export const requestData = async ({ queryKey }: IQueryData) => {
	// console.info('[request]', queryKey) // TODO:
	const { url, method, query: searchParams, body: json } = queryKey[0]
	const requestOptions = { method, searchParams, json }
	const startTime = new Date().getTime()

	try {
		const response: KyResponse = await ky(url, requestOptions)
		const results = await response.json()

		// console.info('[api result]', results) // TODO:
		return {
			metadata: {
				statusCode: response.status,
				statusText: `${ response.status }\xa0` + getReasonPhrase(response.status),
				durationTime: prettyMilliseconds(new Date().getTime() - startTime),
				payloadSize: prettyBytes(JSON.stringify(results).length),
			},
			headers: convertObjToArr(response.headers.entries()),
			data: results,
		}
	} catch (error) {
		if (error instanceof HTTPError) {
			// console.warn('[api issue]', error) // TODO:
			const ResultError = new ResponseError(
				`${ error.name }: ${ error.message }`, {
				metadata: {
					statusCode: error.response.status,
					statusText: `${ error.response.status }\xa0` + getReasonPhrase(error.response.status),
					durationTime: prettyMilliseconds(new Date().getTime() - startTime),
					payloadSize: prettyBytes(JSON.stringify(error.response).length),
				},
				headers: convertObjToArr(error.response.headers.entries()),
				data: `${ error.name }: ${ error.message }`,
			})
			throw ResultError
		}
	}
}
