import { rest } from 'msw'
import type { PetsResponse } from '../../src/api/type/pet'
import { pageInfo, pets } from './response'

export const getPets = rest.get(
  `${process.env.NEXT_PUBLIC_API_URL}/pets`,
  (_, res, ctx) => {
    return res(
      ctx.json<PetsResponse>({
        pageInfo,
        items: pets,
      })
    )
  }
)
