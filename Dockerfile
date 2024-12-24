# Stage 1: Build
FROM node:23.4.0 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Generate the Drizzle Kit files
RUN npx drizzle-kit generate

# Build the SvelteKit application
RUN npm run build


# Stage 2: Production
FROM node:23.4.0 as production

# Set working directory
WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit dev


# Copy build output from the build stage
COPY --from=build /app/build ./

# Copy Drizzle migration files
COPY --from=build /app/drizzle ./drizzle

# Copy the .env.prod file
COPY .env.prod .env

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "--env-file=.env", "/app"]

# ENTRYPOINT ["node", "--env-file=.env.prod", "/app"]