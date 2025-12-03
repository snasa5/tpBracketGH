
class TournamentManager:
    def __init__(self):
        self.teams = [
            "Panama","Algeria","Argentina","Australia","Austria","Belgium","Brazil","Jordan",
            "Canada","Ghana","Colombia","Costa Rica","Croatia","Scotland","Ecuador","Egypt",
            "Denmark","Poland","France","Spain","Switzerland","Tunisia","DR Congo","Turkey",
            "Germany","Cape Verde","Iran","Mexico","Italy","Ivory Coast","Jamaica","Japan",
            "England","Morocco","Netherlands","New Zealand","Norway","Paraguay","Portugal",
            "Qatar","Saudi Arabia","Senegal","South Africa","South Korea","United States",
            "Uruguay","Uzbekistan","Curaçao"
        ]
        self.pools = {}

    def generate_bracket(self):
        groups = {}
        for i in range(12):
            groups[f"Group {chr(65+i)}"] = self.teams[i*4:(i+1)*4]
        return groups

    def create_pool(self, pool_name):
        pool_id = len(self.pools) + 1
        self.pools[pool_id] = {"name": pool_name, "members": []}
        return {"pool_id": pool_id, "name": pool_name}

    def join_pool(self, pool_id, user_id):
        if pool_id in self.pools:
            self.pools[pool_id]["members"].append(user_id)
            return {"message": f"{user_id} joined pool {pool_id}"}
        return {"error": "Pool not found"}
