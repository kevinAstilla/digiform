import mongoose, { Document, Model, Schema } from 'mongoose'
import mongooseDelete from 'mongoose-delete'

export interface IFormTemplate extends Document{
 name: string;
 field: any[];
 status: 'draft' | 'pubslished' | 'archived';
}

const FormTemplateSchema = new Schema<IFormTemplate>(
  {
    name: { type: String, required: true },
    field: { type: [], required: true, default: [] },
    status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

FormTemplateSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true })

const FormTemplateModel: Model<IFormTemplate> = mongoose.model<IFormTemplate>('FormTemplate', FormTemplateSchema)

export default FormTemplateModel