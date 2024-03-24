import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PermissionDocument = HydratedDocument<Permission>;

@Schema()
export class Permission {
  @Prop()
  name: string;

  @Prop({ type: [] })
  methods: string[];
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
