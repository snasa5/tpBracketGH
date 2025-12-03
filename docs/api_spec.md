

# TourneyPredict API Specification

## Auth
- POST /auth/register
  - Body: { phone: string, pin: string }
  - Resp: { tpId: string }
- POST /auth/login
  - Body: { id: string, pin: string }
  - Resp: { message: string, tpId: string }
- POST /auth/request-verification
  - Body: { tpId: string, phone: string }
  - Resp: { status: 'sent' }
- POST /auth/confirm-verification
  - Body: { tpId: string, code: string }
  - Resp: { status: 'verified' }
- POST /auth/complete-profile
  - Body: { tpId: string, name?: string, city?: string, country?: string }
  - Resp: { status: 'profile updated', user: object }

## Pools
- POST /pools/new
  - Body: { ownerId: string, name: string, type: 'individual'|'institution' }
  - Resp: Pool
- GET /pools/list?ownerId=string
  - Resp: Pool[]

## Scoring
- POST /scoring/score
  - Body: { match: Match, prediction: Prediction, isFinal: boolean }
  - Resp: { points: number }

## Goalserve
- GET /goalserve/live?leagueId=string
- GET /goalserve/stats/:matchId

## Payouts
- POST /payouts/payout
  - Body: { prizeWei: string, winnerAddress: string }
  - Resp: { txHash: string }
