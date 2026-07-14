import { getMechs } from '../controllers/mechController.js';

const mechsRoutes = async (req, res) => {
  if (req.method === 'GET' && req.url === '/mechs') {
    await getMechs(req, res);
  }
};

export { mechsRoutes };