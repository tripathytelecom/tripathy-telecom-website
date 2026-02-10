import os

files = [
    "admit-details.html", "contact.html", "job-details.html", "jobs.html", 
    "pan-card.html", "products.html", "recharge.html", "result-details.html", 
    "services.html"
]

desktop_link = '      <a href="https://tripathytelecom.github.io/Attendance-/">Attendance</a>'
mobile_link = '    <a href="https://tripathytelecom.github.io/Attendance-/">📋</a>'

root_dir = r"c:\Users\tripa\Desktop\tripathytelecom\tripathy-telecom-website"

for filename in files:
    filepath = os.path.join(root_dir, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} (not found)")
        continue
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    updated = False

    # Update Desktop Menu
    if "https://tripathytelecom.github.io/Attendance-/" not in content:
        if "</nav>" in content:
            content = content.replace("</nav>", f"{desktop_link}\n    </nav>")
            print(f"Updated Desktop Menu in {filename}")
            updated = True
        else:
            print(f"Could not find </nav> in {filename}")

    # Update Mobile Menu
    # We look for the jobs link in mobile menu as anchor
    mobile_anchor = '<a href="jobs.html">💼</a>'
    if mobile_anchor in content and "📋" not in content:
        content = content.replace(mobile_anchor, f"{mobile_anchor}\n{mobile_link}")
        print(f"Updated Mobile Menu in {filename}")
        updated = True
    elif "📋" not in content:
        print(f"Could not find mobile menu anchor in {filename}")

    if updated:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
