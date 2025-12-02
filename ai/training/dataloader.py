
import json
import torch
from torch.utils.data import Dataset

class MatchDataset(Dataset):
    def __init__(self, hist_path: str):
        data = json.load(open(hist_path))
        self.X = torch.tensor([d['features'] for d in data], dtype=torch.float32)
        self.y = torch.tensor([d['label'] for d in data], dtype=torch.long)

    def __len__(self): return len(self.y)
    def __getitem__(self, idx): return self.X[idx], self.y[idx]
