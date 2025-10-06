from flask import Flask, request, jsonify
from flask_cors import CORS
import models
from log_reg import register
from extratos import listar_extratos, upload_extrato  # novo import

app = Flask(__name__)
CORS(app)

@app.route("/listarextratos", methods=["GET"])
#Essa rota lista os extratos de um usuário específico, identificado pelo user_id passado como parâmetro de consulta na URL.
#Essa rota recebe um user_id no body da requisição GET
def listar_extratos_route():
    user_id = request.args.get("user_id")
    return listar_extratos(user_id)

@app.route("/uploadextrato", methods=["POST"])
def upload_extrato_route():
    data = request.get_json()
    user_id = data.get("user_id")
    csv_text = data.get("csv")
    if csv_text.endswith('=='):
        return upload_extrato(user_id, csv_text)
    else:
        return jsonify({"error": "csv inválido"}), 400

if __name__ == "__main__":
    models.init_db()
    app.run(debug=True, port=5000)
