const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       if (!token) {
           return res.status(401).json({ error: 'Token non fourni !' });
       }

       jwt.verify(token, 'RANDOM_TOKEN_SECRET', (error, decodedToken) => {
           if (error) {
               return res.status(401).json({ error: 'Token invalide !' });
           }
           next(); // Si le token est valide, on autorise la requête
       });
   } catch(error) {
       res.status(401).json({ error: 'Authentification échouée !' });
   }
};
