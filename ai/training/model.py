import torch
import torch.nn as nn

class MatchPredictor(nn.Module):
    def __init__(self, in_features=64, hidden=128):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_features, hidden),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden, hidden),
            nn.ReLU(),
            nn.Linear(hidden, 3)  # home win, draw, away win
        )

    def forward(self, x):
        return self.net(x)
