import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function handler(req, res) {
  const server = jsonServer.create();
  const router = jsonServer.router(path.join(__dirname, '../db.json'));
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  server(req, res);
}
