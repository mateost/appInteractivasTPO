import jwt from 'jsonwebtoken'

export function autentication (req, res, next) {
  try {
    const token = req.headers['auth-token']
    if (token) {
      const tokenValidate = jwt.verify(token, "TARKET SECRET TOKEN")
      if (tokenValidate) {
        next()
      } else {
        res.status(401).json({ msg: 'El Token es incorrecto' })
      }
    } else {
      res.status(401).json({ msg: 'El Token no pudo ser enviado' })
    }
  } catch (err) {
    res.status(401).json({ msg: 'El Token es incorrecto' })
  }
}
