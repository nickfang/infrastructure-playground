# Use a lightweight Node.js image as a base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker layer caching
# This step only re-runs if these files change, speeding up subsequent builds
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# The command to run when the container starts
CMD ["node", "index.js"]