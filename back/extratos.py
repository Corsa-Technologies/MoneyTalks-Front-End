from flask import Blueprint, request, jsonify
from models import get_db  # assumindo que você tenha get_db para conexão



## Listar extratos de um usuário
def listar_extratos(user_id):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id, csv_data FROM extratos WHERE user_id = ?", (user_id,))
    rows = cur.fetchall()
    conn.close()

    if not rows:
        return jsonify({"extratos": []})

    extratos = [{"id": row[0], "csv": row[1]} for row in rows]
    return jsonify({"extratos": extratos})

## Upload de um novo extrato
def upload_extrato(user_id, csv_text):
    if not csv_text:
        return jsonify({"error": "csv n fornecido"}), 400

    conn = get_db()
    cur = conn.cursor()
    cur.execute("INSERT INTO extratos (user_id, csv_data) VALUES (?, ?)", (user_id, csv_text))
    conn.commit()
    extrato_id = cur.lastrowid
    conn.close()

    return jsonify({"message": "extrato salvo com sucesso", "extrato_id": extrato_id})
