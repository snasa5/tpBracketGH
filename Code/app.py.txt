
from flask import Flask, jsonify, request
import random, string
from tournament import TournamentManager
from scoring import ScoringEngine
from blockchain import BlockchainModule
from ai_integration import AIIntegration
from payment import PaymentProcessor

app = Flask(__name__)

# Initialize modules
tournament_manager = TournamentManager()
scoring_engine = ScoringEngine()
blockchain_module = BlockchainModule()
ai_module = AIIntegration()
payment_processor = PaymentProcessor()

# Temporary stores for registration
pending_verifications = {}
verified_users = {}

@app.route('/register', methods=['POST'])
def register():
    phone = request.json.get('phone')
    if not phone:
        return jsonify({"error": "Phone number required"}), 400
    code = ''.join(random.choices(string.digits, k=6))
    pending_verifications[phone] = code
    return jsonify({"message": "Verification code sent", "mock_code": code})

@app.route('/verify', methods=['POST'])
def verify():
    phone = request.json.get('phone')
    code = request.json.get('code')
    if pending_verifications.get(phone) == code:
        user_id = ''.join(random.choices(string.digits, k=6))
        verified_users[phone] = user_id
        del pending_verifications[phone]
        return jsonify({"message": "Verified successfully", "user_id": user_id})
    return jsonify({"error": "Invalid code"}), 400

@app.route('/generate_bracket', methods=['GET'])
def generate_bracket():
    return jsonify({"bracket": tournament_manager.generate_bracket()})

@app.route('/create_pool', methods=['POST'])
def create_pool():
    pool_name = request.json.get('pool_name')
    return jsonify({"message": "Pool created", "pool": tournament_manager.create_pool(pool_name)})

@app.route('/join_pool', methods=['POST'])
def join_pool():
    pool_id = request.json.get('pool_id')
    user_id = request.json.get('user_id')
    return jsonify(tournament_manager.join_pool(pool_id, user_id))

@app.route('/submit_predictions', methods=['POST'])
def submit_predictions():
    user_id = request.json.get('user_id')
    predictions = request.json.get('predictions')
    return jsonify(scoring_engine.submit_predictions(user_id, predictions))

@app.route('/calculate_score', methods=['POST'])
def calculate_score():
    user_id = request.json.get('user_id')
    actual_results = request.json.get('actual_results')
    return jsonify({"user_id": user_id, "score": scoring_engine.calculate_score(user_id, actual_results)})

@app.route('/get_leaderboard', methods=['GET'])
def get_leaderboard():
    return jsonify({"leaderboard": scoring_engine.get_leaderboard()})

@app.route('/process_payment', methods=['POST'])
def process_payment():
    method = request.json.get('method')  # "card" or "crypto"
    amount = request.json.get('amount', 1.0)
    if method == "card":
        source = request.json.get('source')
        result = payment_processor.process_card_payment(amount, source=source)
    elif method == "crypto":
        wallet = request.json.get('wallet_address')
        result = payment_processor.process_crypto_payment(wallet, amount)
    else:
        result = {"status": "error", "message": "Invalid payment method"}
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
