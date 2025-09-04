import app from "./app"
import config from "./app/config/index";

import mongoose from "mongoose";

async function main() {
  try {
    // await mongoose.connect(config.db_url as string);
    // const connection = await mongoose.createConnection(`${config.url}/${tenantId}?${config.ext}`)


    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main()