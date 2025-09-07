class ContactController {
    // [GET] /contact
    index(req, res) {
        res.render('contact');
    }

    // [GET] /contact/:slug
    show(req, res) {
        res.send('CONTACT DETAIL PAGE');
    }
}

export default new ContactController();