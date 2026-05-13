import express from "express";
import router from "./routes/api.js";

const app = express();

app.use(express.json());
app.use('/api',router);

const PORT = process.env.APP_PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
