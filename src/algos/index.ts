import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as np from './np'

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos: Record<string, AlgoHandler> = {
  [np.shortname]: np.handler,
}

export default algos
