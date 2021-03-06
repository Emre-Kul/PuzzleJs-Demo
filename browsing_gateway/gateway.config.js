module.exports = {
  "name": "browsing-gateway",
  "port": process.env.PORT || 4445,
  "url": process.env.BROWSING_GW_URL || "http://localhost:4445/",
  "fragments": [
    {
      "name": "header",
      "testCookie": "header_test",
      "version": "1.0.0",
      "versions": {
        "1.0.0": {
          "assets": [],
          "dependencies": []
        }
      },
      "render": {
        "placeholder": true,
        "url": ["/"],
        "middlewares": []
      }
    },
    {
      "name": "post1",
      "testCookie": "post1_test",
      "version": "1.0.0",
      "versions": {
        "1.0.0": {
          "assets": [],
          "dependencies": []
        }
      },
      "render": {
        "placeholder": true,
        "url": ["/"],
        "middlewares": []
      }
    },
    {
      "name": "post2",
      "testCookie": "post2_test",
      "version": "1.0.0",
      "versions": {
        "1.0.0": {
          "assets": [],
          "dependencies": []
        }
      },
      "render": {
        "url": ["/"],
        "middlewares": []
      }
    }
  ],
  "api": [],
  "fragmentsFolder": "./src/fragments"
}
