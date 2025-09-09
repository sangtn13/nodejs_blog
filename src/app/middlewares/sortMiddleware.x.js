function SortMiddleware(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: "default",
  };

  if ("_sort" in req.query) {
    res.locals._sort.enabled = true;
    res.locals._sort.type = req.query.type;
    res.locals._sort.column = req.query.column;
  }

    next();
}

export default SortMiddleware;