
from flask import Flask, render_template, redirect, url_for, request
from flask_cors import CORS
from database import select_elements, select_element_by, select_random_element

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/elements")
def elements():
    data = {"data": select_elements()}
    return data


@app.route("/elements/<identifier>/<value>")
def one_element(identifier, value):
    data = select_element_by(identifier, value)
    if not data:
        return {"Error": "Value out of range. Check your spelling."}
    else:
        return data


@app.route("/elements/random")
def random_element():
    return select_random_element()


if __name__ == '__main__':
    app.run(debug=True)
