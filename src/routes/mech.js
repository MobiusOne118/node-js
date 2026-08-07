import { getMechs, addMech } from '../controllers/mechController.js';

const mechsRoutes = async (req, res) => {
  if (req.method === 'GET' && req.url === '/mechs') {
    await getMechs(req, res);
  } else if (req.method === 'POST' && req.url === '/mechs') {
    await addMech(req, res);
  }
};

export { mechsRoutes };