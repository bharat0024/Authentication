# Authentication

## Module Information

- Title: `Authentication Module`
- Author: `Bharat Makwana`

## Install & Dependence

```
"devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/jsonwebtoken": "^9.0.6",
    "@types/mysql": "^2.15.26",
    "@types/node": "^20.12.4",
    "@types/otp-generator": "^4.0.2",
    "nodemon": "^3.1.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.3"
  },
  "dependencies": {
    "@types/express": "^4.17.21",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-validator": "^7.0.1",
    "generate-unique-id": "^2.0.3",
    "jsonwebtoken": "^9.0.2",
    "mysql": "^2.18.1",
    "mysql2": "^3.9.3",
    "otp-generator": "^4.0.1",
    "pino": "^8.19.0"
  }
```

## Directory Hierarchy

```
|—— .env
|—— .gitignore
|—— config
|    |—— db.ts
|—— controllers
|    |—— userController.ts
|—— env_example.md
|—— helpers
|    |—— activationLink.ts
|—— index.ts
|—— logger
|    |—— logger.ts
|—— middlewares
|    |—— authMiddleware.ts
|    |—— interceptor.ts
|—— models
|    |—— user.ts
|—— package-lock.json
|—— package.json
|—— public
|    |—— images
|    |—— javascripts
|    |—— stylesheets
|        |—— 404.css
|—— routes
|    |—— auth.ts
|    |—— main.ts
|—— services
|    |—— emailService.ts
|—— tsconfig.json
|—— utils
|    |—— dbHandler.ts
|—— validators
|    |—— userValidation.ts
|—— views
|    |—— 404.html
```
