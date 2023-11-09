exports.api = function(req, res) {
    res.json({
      resources: [
        {
          resource: 'costumes',
          verbs: ['GET', 'PUT', 'DELETE'],
        },
      ],
    });
  };