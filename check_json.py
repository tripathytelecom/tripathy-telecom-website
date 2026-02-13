import json
import sys

path = r'c:\Users\tripa\OneDrive\Desktop\tripathytelecom\tripathy-telecom-website\mock-questions.json'
try:
    with open(path, 'r', encoding='utf-8') as f:
        json.load(f)
    print("Valid JSON")
except json.JSONDecodeError as e:
    print(f"Error at line {e.lineno}, col {e.colno}: {e.msg}")
    
    # Show context
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        start = max(0, e.lineno - 5)
        end = min(len(lines), e.lineno + 5)
        for i in range(start, end):
            prefix = ">>>" if i + 1 == e.lineno else "   "
            print(f"{prefix} {i+1}: {lines[i].strip()}")
