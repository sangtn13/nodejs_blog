function sortMiddleware(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: "default",
  };

  if ("_sort" in req.query) {
    res.locals._sort.enabled = true;
    
    const validTypes = ["asc", "desc"];
    res.locals._sort.type = validTypes.includes(req.query.type) ? req.query.type : "default";
    res.locals._sort.column = req.query.column;
  }

    next();
}

export default sortMiddleware;