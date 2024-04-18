


async function getSession(req, res) {
    if (req.session.user) {
      res.send({
        result: true,
        user: req.session.user
      });
    } else {
      res.status(404).send({
        result: false
      });
    }
}

module.exports = {
    getSession
}