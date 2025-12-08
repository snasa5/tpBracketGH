

# Historical datasets

- Include JSON lines or CSV of past matches with features and labels:
  - features: numerical vector (shots, possession, fouls, odds, injuries, form)
  - label: 0=home win, 1=draw, 2=away win
- Suggested files:
  - fifa_world_cup_2010_2022.json
  - uefa_euro_2008_2024.json
- Use `ai/training/dataloader.py` expecting:
  [
    { "features": [ ... 64 numbers ... ], "label": 0 },
    ...
  ]
