// Logic for request
// Data from file/server/database etc

import { readFile, writeFile } from 'fs/promises';

async function getMechs(req, res) {
  const raw = await readFile('./mock-data/mech-data.json', 'utf-8');
  const jsonData = JSON.parse(raw);
  res.end(JSON.stringify(jsonData));
};

async function addMech(req, res) {
  let body;
  try {
    body = await readRequestBody(req);
  } catch {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Invalid JSON body' }));
    return;
  }

  const { name, weight, speed = 0 } = body;
  if (typeof name !== 'string' || typeof weight !== 'number' || typeof speed !== 'number') {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'name must be a string, weight must be a number, and speed must be a number' }));
    return;
  }

  const raw = await readFile('./mock-data/mech-data.json', 'utf-8');
  const mechs = JSON.parse(raw);
  const newMech = { name, weight, speed };
  const existingIndex = mechs.findIndex((mech) => mech.name === name);
  if (existingIndex === -1) {
    mechs.push(newMech);
  } else {
    mechs[existingIndex] = newMech;
  }
  await writeFile('./mock-data/mech-data.json', JSON.stringify(mechs, null, 2));

  res.statusCode = existingIndex === -1 ? 201 : 200;
  res.end(JSON.stringify(newMech));
};

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

export { getMechs, addMech };