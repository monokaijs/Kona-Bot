import {Mongoose, connect} from "mongoose";

export class DatabaseService {
  static connectionUri = process.env.MONGO_URL;
  static connection: Mongoose;
  static async connect(uri: string | null = null) {
    if (uri) {
      this.connectionUri = uri;
    } else if (!this.connectionUri) {
      throw new Error("Failed to connect to Database");
    }
    this.connection = await connect(this.connectionUri);
    return this.connection;
  }
}
