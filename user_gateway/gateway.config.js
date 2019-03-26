module.exports = {
  "name": "user-gateway",
  "port": process.env.PORT || 4446,
  "url": process.env.USER_GW_URL || "http://localhost:4446/",
  "fragments": [
    {
      "name": "sidemenu",
      "testCookie": "sidemenu_test",
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
    }
  ],
  "api": [],
  "fragmentsFolder": "./src/fragments"
}
