import pkg from "mongoose";

const { Schema, model } = pkg;
const userCollection = "users";

const userSchema = new Schema(
    {
        name: { type:String },
        username: {type: String, required:true},
        password: {type: String, required: true}
    }
)

const User = model(userCollection, userSchema);

export default User;