{
  "manifest_version": 3,
  "name": "DA Task Alert",
  "version": "1.0",
  "description": "Telegram alert when DA project rows hit 2",
  "permissions": ["storage"],
  "host_permissions": [
    "https://app.dataannotation.tech/*"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": [
        "https://app.dataannotation.tech/workers/projects*"
      ],
      "js": ["content.js"]
    }
  ]
}
