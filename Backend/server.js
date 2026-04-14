const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const Fastordersroutes = require("./routes/Fastorders");
app.use("/purchase-orders", Fastordersroutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
