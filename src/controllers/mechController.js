// Logic for request
// Data from file/server/database etc

import { readFile } from 'fs/promises';

async function getMechs(req, res) {
  const raw = await readFile('./mock-data/mech-data.json', 'utf-8');
  const jsonData = JSON.parse(raw);
  res.end(JSON.stringify(jsonData));
};

export { getMechs };