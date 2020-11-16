'use strict';

import mongoose from '../mongodb/db'

const Schema = mongoose.Schema;
// 图鉴表，根据等级
const ModelUser11 = new Schema({
  name: {
    type: String,
    default: ''
  },
  sex: {
    type: String,
    default: '1'
  },
  birth: {
    type: String,
    default: ''
  },
  number: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  order: {
    type: Number,
    default: 0
  }
})

export default mongoose.model('ModelUser11', ModelUser11);