import mongoose from "mongoose";

const login = mongoose.Schema({
  username: String,
  password: String,
  socketid: String,
});

let AuthModel = mongoose.model("users", login);
// mongoose.model(collection,Schema )
// module.exports = AuthModel;
export default AuthModel;
