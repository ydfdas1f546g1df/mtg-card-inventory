# MTG Card Inventory

A self-hosted Magic: The Gathering card inventory application built with **SvelteKit**, **PostgreSQL**, and **Drizzle ORM**. This app provides an intuitive interface for managing your MTG card collection and decks.

---

## Features

- **Card Inventory Management**: Add, edit, and track your collection.
- **Deck Building**: Create and manage decks from your collection.
- **Database Integration**: Uses PostgreSQL for storing inventory and deck data.
- **Dockerized**: Easy deployment using Docker and Docker Compose.
- **Responsive Design**: Optimized for desktop and mobile.

---

## Tech Stack

- **Frontend**: SvelteKit
- **Backend**: SvelteKit API routes
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Containerization**: Docker and Docker Compose

---

## Requirements

- **Docker**: >= 20.10
- **Docker Compose**: >= 1.29
- **Node.js**: >= 23.0

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd mtg-card-inventory
   ```

2. **Environment Configuration**:
   Create a `.env` file in the root directory with the following content:
   ```env
   DATABASE_URL=postgresql://root:mysecretpassword@db:5432/local
   NODE_ENV=production
   ```

3. **Build and Start Services**:
   Use Docker Compose to build and start the services:
   ```bash
   docker compose up --build
   ```

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Scripts

### Development
- `npm run dev`: Start the development server with hot reloading.
- `npm run lint`: Check for code formatting and linting issues.

### Production
- `npm run production`: Build and start the application using Docker Compose.
- `npm run production:stop`: Stop the production services.

### Database Management
- `npm run db:migrate`: Apply database migrations.
- `npm run db:push`: Push schema changes to the database.
- `npm run db:studio`: Open Drizzle Studio for managing the database.

---

## Project Structure

```plaintext
mtg-card-inventory/
├── src/             # SvelteKit source code
├── public/          # Static assets
├── .env             # Environment configuration
├── Dockerfile       # Dockerfile for the application
├── docker-compose.yml # Docker Compose configuration
├── package.json     # Project dependencies and scripts
├── tsconfig.json    # TypeScript configuration
└── README.md        # Project documentation
```

---

## Contributing

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

