# Builder
FROM node:19-alpine3.16 as builder

# Args
ARG PORT
ARG HOST
ARG GOOGLE_BOOK_API_URL
ARG GOOGLE_BOOK_API_KEY

# Env
ENV NODE_ENV=development
ENV PORT=$PORT
ENV HOST=$HOST
ENV NEXT_PUBLIC_GOOGLE_BOOK_API_URL=$GOOGLE_BOOK_API_URL
ENV NEXT_PUBLIC_GOOGLE_BOOK_API_KEY=$GOOGLE_BOOK_API_KEY

# Init
WORKDIR /usr/src/gba

COPY package.json .
COPY yarn.lock .

COPY next.config.js .

COPY tsconfig.json .
COPY next-env.d.ts .

RUN yarn

# Copy project
COPY src ./src

# Copy resources
COPY public ./public

# Build
RUN yarn build

# Load only production dependencies
RUN yarn ci

# Runner 
FROM node:19-alpine3.16 as runner 

# Args
ARG PORT
ARG HOST
ARG GOOGLE_BOOK_API_URL
ARG GOOGLE_BOOK_API_KEY

# Env
ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=$HOST
ENV NEXT_PUBLIC_GOOGLE_BOOK_API_URL=$GOOGLE_BOOK_API_URL
ENV NEXT_PUBLIC_GOOGLE_BOOK_API_KEY=$GOOGLE_BOOK_API_KEY

# Init
WORKDIR /usr/src/gba

COPY --from=builder /usr/src/gba/package.json ./package.json
COPY --from=builder /usr/src/gba/yarn.lock ./yarn.lock 
COPY --from=builder /usr/src/gba/next.config.js ./next.config.js
COPY --from=builder /usr/src/gba/.next ./.next
COPY --from=builder /usr/src/gba/public ./public
COPY --from=builder /usr/src/gba/node_modules ./node_modules

EXPOSE ${PORT}

RUN npx next telemetry disable

# Run
CMD yarn start
