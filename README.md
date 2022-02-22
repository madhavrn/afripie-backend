# Afripie backend

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Structue](#structure)

## Installation

Clone the project and run:

```
npm run install
```

To be able to run this project you'll need these dependencies:

- MySQL

- .env file (that contains passwords) in project root directory

## Usage

Before running the project you can populate db with a seed data using this command:

```
npm run populate
```

To run project in development mode use:

```
npm run start
```


I recommend using [Postman](https://www.getpostman.com/) for testing the endpoints.

## Structure

Project have following structure

```
  .
  │
  ├── src                           # Backend source code
  │   │
  │   │
  │   ├── config                    # Cantains database configuration
  │   │
  │   │
  │   ├── middlewares               # Contains express middlewars
  │   │
  │   │
  │   ├── migrations                # Contains db migration files
  │   │
  │   │
  │   ├── models                    # Contains db models
  │   │
  │   │
  │   ├── routes                    # Contains routers
  │   │
  │   │
  │   ├── seeders                   # Contains db seed files
  │   │
  │   │
  │   └── services                  # Contains 3rd party services
  │
  ├── app.js
  │
  │
  └── .env                          # Not tracked by git. Contains sensitive
                                    # information like passwords and api keys.
                                    # local environment is assumed

```

