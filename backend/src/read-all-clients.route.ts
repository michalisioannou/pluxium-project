import {db} from './database'

export function readAllClients(req, res) {
  console.log("user is reading all clients");
  res.status(200).json({lessons:db.readAllLessons()});
}
