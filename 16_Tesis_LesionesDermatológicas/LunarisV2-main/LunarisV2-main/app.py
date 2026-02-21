from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/prediccion")
def prediccion():
    return render_template("prediccion.html")

@app.route("/ViT")
def ViT():
    return render_template("ViT.html")

@app.route("/Dataset_local")
def Dataset_local():
    return render_template("Dataset_local.html")
