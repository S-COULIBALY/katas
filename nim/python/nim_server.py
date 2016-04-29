from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("nim.html", last_turn = 0)

@app.route("/jouer")
def jouer():
    return "cool"

if __name__ == "__main__":
    app.run()