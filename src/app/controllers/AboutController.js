class AboutController {
  // [GET] /about
  index(req, res) {
    res.render('about');
  }

  // [GET] /about/:slug
  show(req, res) {
    res.send('ABOUT DETAIL PAGE');
  }
}

export default new AboutController();
