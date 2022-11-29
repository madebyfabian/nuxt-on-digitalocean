export default defineEventHandler(event => {
	const hostHeader = event.node.req.headers['Host'] as string

	return {
		hostHeader,
	}
})
