import { connect, connection, Types } from "mongoose";

//Database configuration
const connectionState = {
    isConnected: false
}
const dbConfig = {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
}
export async function connectToDb() {
    if (connectionState.isConnected) return
    const { database, host, user, password } = dbConfig
    const db = await connect(`mongodb+srv://${user}:${password}@${host}/${database}?ssl=true&retryWrites=false&w=majority`)
    console.log('CONNECTED TO THE DATABASE, ENJOY.')
    connectionState.isConnected = !!db.connections[0].readyState
}
connection.on("connect", () => {
    console.log("CONNECTED TO THE DATABASE.");
})
connection.on("error", (err) => {
    console.error('DATABASE ERROR: ', err);
})
export const getObjectId = () => {
    return new Types.ObjectId()
}