export default function access_control(allowed_roles) {
  return function (request, response, next) {
    if (request.session.login != null) {
      if (allowed_roles.includes(request.session.login.role)) {
        next();
      } else {
        response.status(403).json({
          code: 403,
          message: "Incorrect access role",
        });
      }
    } else {
      response.status(401).json({
        code: 401,
        message: "Client not authenticated",
      });
    }
  };
}
