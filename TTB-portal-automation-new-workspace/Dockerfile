FROM cypress/included:13.6.0

# Create app user
RUN useradd -ms /bin/bash appuser

RUN mkdir -p /home/appuser/project

# Create app directory
WORKDIR /home/appuser/project

# Copy project files
COPY . .

# Change ownership
RUN chown -R appuser:appuser /home/appuser/project

USER appuser
# Install dependencies
RUN npm install

# Copy rest of project
COPY --chown=appuser:appuser . .

# Run Cypress
CMD ["npx", "cypress", "run", "--config", "baseUrl=http://localhost:8080"]