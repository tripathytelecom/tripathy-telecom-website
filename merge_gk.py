
import json
import os

file_path = r'c:\Users\tripa\OneDrive\Desktop\tripathytelecom\tripathy-telecom-website\mock-questions.json'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Look for the second "Static GK" key
indices = [i for i, line in enumerate(lines) if '"Static GK": {' in line]
print(f"Found 'Static GK' at lines: {[i+1 for i in indices]}")

# We want to take the 'Full Subject Mock' content from the second one
# and add it to the first one.

# Since we have duplicate keys, standard json.load might swallow one.
# Let's rename the second one in the string buffer first.
content = "".join(lines)
# Find the second occurrence and rename it
first_pos = content.find('"Static GK": {')
second_pos = content.find('"Static GK": {', first_pos + 1)

if second_pos != -1:
    new_content = content[:second_pos] + '"Static GK NEW": {' + content[second_pos + len('"Static GK": {'):]
    data = json.loads(new_content)
    
    # "GK" is the top level key (actually it's inside the root)
    # Wait, let's verify if "GK" is root or if there's a wrapper
    root_keys = list(data.keys())
    print(f"Root keys: {root_keys}")
    
    # If "GK" is a root key
    gk = data.get("GK", {})
    if "Static GK" in gk and "Static GK NEW" in gk:
        old_set = gk["Static GK"]["Full Subject Mock"]
        new_set = gk["Static GK NEW"]["Full Subject Mock"]
        
        # New set should be "Static GK - Set 2 (Bengali)"
        # Let's update its name
        for item in new_set:
            item["chapterName"] = "Static GK - Set 2 (Bengali)"
            
        old_set.extend(new_set)
        
        # Remove the duplicate
        del gk["Static GK NEW"]
        
        # Save back
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print("Successfully merged Static GK sets and removed duplicate.")
    else:
        # Maybe they are not inside "GK" but siblings?
        if "Static GK" in data and "Static GK NEW" in data:
            old_set = data["Static GK"]["Full Subject Mock"]
            new_set = data["Static GK NEW"]["Full Subject Mock"]
            for item in new_set:
                item["chapterName"] = "Static GK - Set 2 (Bengali)"
            old_set.extend(new_set)
            del data["Static GK NEW"]
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            print("Successfully merged Static GK sets (siblings) and removed duplicate.")
        else:
            print("Could not find the expected structure for merging.")
else:
    print("Only one 'Static GK' key found. Nothing to merge.")
