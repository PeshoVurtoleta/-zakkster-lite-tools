# 🧪 @zakkster/lite-tools | Interactive Recipe Implementation Examples

This directory contains standalone, zero-dependency HTML files demonstrating the power of the `lite-tools` v2.0 engine. 

Each file corresponds directly to a numbered recipe from the main documentation.


🔗 **[View the full index of all 24 recipes in the main README](../README.md)**

---

## 🚀 Running Locally

Because these examples use ES Modules (`<script type="module">`), they cannot be opened directly via the `file://` protocol due to strict browser CORS security. You must serve them through a local web server.

**Quick ways to spin up a local server:**
* **VS Code:** Right-click an HTML file and select "Open with Live Server" (requires the Live Server extension).
* **Node.js:** Open your terminal in this directory and run `npx serve`.
* **Python:** Open your terminal in this directory and run `python3 -m http.server`.
* **PHP:** Open your terminal in this directory and run `php -S localhost:8000`.

Once your local server is running, navigate to the provided localhost URL and click on any `XX.html` file to see the engine in action.