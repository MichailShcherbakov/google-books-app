# Google Book API Provider

## Preview - [Link](https://calculator-constructor-dev-task.netlify.app/)

<img alt src="https://github.com/MichailShcherbakov/google-books-app/blob/master/screenshots/main.png?raw=true" />

## Getting Started (Docker)

First, run the docker image build:

```bash
docker build \
  --build-arg PORT=3000 \
  --build-arg HOST=127.0.0.1 \
  --build-arg GOOGLE_BOOK_API_URL=https://www.googleapis.com/books/v1/volumes \
  --build-arg GOOGLE_BOOK_API_KEY=your_private_api_key \
  -t gba \
  .

```

And then, run the docker container:

```bash
docker run \
  -d \
  -p 3000:3000 \
  gba
```

## Getting Started (Base)

First, create `.env.local` file like `.env.example`, and then build the project:

```bash
yarn && yarn build
```

And finally run the project:

```bash
yarn start
```

## Stack

<h4>Web</h4>

- NextJS
- Redux-Toolkit
- Redux-Saga
- MUI (styled-components)

## Author

<a href="https://github.com/MichailShcherbakov" style="border-radius: 50%; overflow: 'hidden';">
  <img src="https://avatars.githubusercontent.com/u/50011226?s=96&v=4" style="width: 44px"/>
</a>
