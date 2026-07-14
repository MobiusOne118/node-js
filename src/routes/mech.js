import { getMechs } from '../controllers/mechController.js';

const mechsRoutes = (req, res) => {
  if (req.method === 'GET' && req.url === '/mechs') {
    getMechs(req, res);
  }
};

export { mechsRoutes };