export const invalidRouteHandler = (_request, response) => {
  response.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
};
