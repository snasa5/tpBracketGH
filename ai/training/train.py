
import torch, json
from torch.utils.data import DataLoader
from dataloader import MatchDataset
from model import MatchPredictor

def train(hist_path: str, out_path: str, epochs=10, lr=1e-3):
    ds = MatchDataset(hist_path)
    dl = DataLoader(ds, batch_size=64, shuffle=True)
    model = MatchPredictor()
    opt = torch.optim.Adam(model.parameters(), lr=lr)
    loss_fn = torch.nn.CrossEntropyLoss()
    for e in range(epochs):
      for X, y in dl:
        opt.zero_grad(); out = model(X); loss = loss_fn(out, y); loss.backward(); opt.step()
    torch.save(model.state_dict(), out_path)

if __name__ == '__main__':
    train('data/historical/sample.json', 'ai/models/match_predictor.pt')
