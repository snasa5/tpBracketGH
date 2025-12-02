
import stripe

class PaymentProcessor:
    def __init__(self):
        self.stripe_api_key = "sk_test_your_key_here"
        stripe.api_key = self.stripe_api_key

    def process_card_payment(self, amount, currency="usd", source=None, description="TourneyPredict Entry Fee"):
        try:
            charge = stripe.Charge.create(
                amount=int(amount * 100),
                currency=currency,
                source=source,
                description=description
            )
            return {"status": "success", "charge_id": charge.id}
        except Exception as e:
            return {"status": "error", "message": str(e)}

    def process_crypto_payment(self, wallet_address, amount):
        return {"status": "pending", "wallet": wallet_address, "amount": amount}
