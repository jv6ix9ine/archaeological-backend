import { IState } from "../interfaces/state";
import { Model, Schema, model, models } from "mongoose";

interface IStateModel extends Model<IState> { }

const stateSchema = new Schema<IState, IStateModel>({
    name: String,
    zones: [{type: Schema.Types.ObjectId, ref: "Zones" }]
}, {
    timestamps: true
});

export default models.State || model<IState, IStateModel>("states", stateSchema)