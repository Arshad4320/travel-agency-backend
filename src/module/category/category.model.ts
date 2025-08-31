import { model, Schema } from 'mongoose'

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const CategoryModel = model('Category', categorySchema)
