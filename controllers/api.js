exports.api = function(req, res) {
    res.json({
      resources: [
        {
          resource: 'Badminton',
          verbs: ['GET', 'PUT', 'DELETE'],
        },
      ],
    });
  };