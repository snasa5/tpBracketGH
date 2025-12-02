
# Local onboarding (Windows/Mac/Linux)
- **Docker Desktop:** Install and start.
- **Environment:** Create `.env` at infra/docker/.env with required variables.
- **Run:** cd infra/docker && docker-compose up --build
- **Access:** Backend http://localhost:8080, Web http://localhost:3000

# Validation steps
- **Register:** POST /auth/register with phone+pin, receive six-digit TP ID.
- **Login:** POST /auth/login with id+pin.
- **Scoring:** POST /scoring/score with {match, prediction, isFinal}.
- **Goalserve:** GET /goalserve/live?leagueId=FIFA2026.
- **Payout:** POST /payouts/payout with prizeWei+winnerAddress.
