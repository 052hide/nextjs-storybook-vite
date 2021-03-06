import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.get('https://myapi.dev/csr', (req, res, ctx) => {
    return res(
      ctx.json({
        title: 'CSR Source',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      })
    )
  })
)
worker.start()
