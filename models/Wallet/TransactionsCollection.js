import { TXS_PER_PAGE } from '../../dao/AbstractTokenDAO.js'

import { abstractFetchingCollection } from '../AbstractFetchingCollection'

export default class TransactionsCollection extends abstractFetchingCollection({
  endOfList: false,
}) {
  endOfList (value) {
    return this._getSet('endOfList', value < TXS_PER_PAGE)
  }
}
