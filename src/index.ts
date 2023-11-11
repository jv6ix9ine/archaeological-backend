import 'dotenv/config'
import bodyParser from "body-parser";
import cors from "cors"
import express from "express";
import router from "./api/router";

//Server initial configuration
const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);

app.get("*", async (req: express.Request, res: express.Response) => {
    res.status(404).send("This route does not exist.");
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});