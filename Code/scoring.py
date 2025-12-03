
class ScoringEngine:
    def __init__(self):
        self.predictions = {}
        self.scores = {}

    def submit_predictions(self, user, predictions):
        self.predictions[user] = predictions
        return {"message": "Predictions submitted"}

    def calculate_score(self, user, actual_results):
        score = 0
        user_preds = self.predictions.get(user, {})
        for match, actual in actual_results.items():
            pred = user_preds.get(match)
            if pred:
                if pred["winner"] == actual["winner"]:
                    score += 5
                if pred["score"] == actual["score"]:
                    score += 5
        self.scores[user] = score
        return score

    def get_leaderboard(self):
        return sorted(self.scores.items(), key=lambda x: x[1], reverse=True)
