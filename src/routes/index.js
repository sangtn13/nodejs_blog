import aboutRoute from './about.js';
import contactRoute from './contact.js';
import siteRoute from './site.js';

function route(app) {
  // root route
  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });

  //   app.get("/about", (req, res) => {
  //     res.render("about");
  //   });

  //   app.get("/contact", (req, res) => {
  //     res.render("contact");
  //   });

  //   app.get("/search", (req, res) => {
  //     res.render("search");
  //   });

  app.use('/about', aboutRoute);
  app.use('/contact', contactRoute);
  app.post('/search', (req, res) => {
    res.send(
      `Kết quả tìm kiếm cho: ${req.body.q} với thông tin: ${req.body.info}`,
    );
  });

  app.use('/', siteRoute);

  app.use((req, res) => {
    res.status(404).render('404', { url: req.originalUrl });
  });
}

export default route;
