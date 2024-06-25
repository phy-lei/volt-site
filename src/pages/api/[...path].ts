import type { APIRoute } from 'astro'

const API_URL = import.meta.env.API_URL
export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json()
  const response = await fetch(`${API_URL}/${params.path}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: request.headers,
  }).catch((err: Error) => {
    console.error(err)
    return new Response(JSON.stringify({
      error: {
        code: err.name,
        message: err.message,
      },
    }), { status: 500 })
  }) as Response

  return new Response(JSON.stringify(await response.json()), {
    status: response.status,
    statusText: response.statusText,
  })
}
