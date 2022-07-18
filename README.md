# README

## Install Instructions

1. Clone the repo
2. `yarn install`
3. Create an `.env` file at the project root
4. Fill `.env` with the following ...
  ```
    SESSION_SECRET=''
    DATABASE_URL=''

  ```
  SESSION_SECRET can be generated in the command line via `yarn rw g secret`
  DATABASE_URL is the Railway PSQL connection string (ensure you're in the development DB!)
5. `yarn rw dev` will start the server

Let 'er rip
