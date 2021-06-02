import app from "./App";
import "reflect-metadata";
import { createConnection } from "typeorm";

app.listen(8080, () => {
    console.log("Listening on port 8080");
});

createConnection()
    .then(() => {
        console.log("Connecté à la base de donnée");
    })
    .catch((error) => {
        console.log(error);
    });
