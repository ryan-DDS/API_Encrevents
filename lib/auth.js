import jwt from "jsonwebtoken";

const SECRET = "encrevents_secret";

export function gerarToken(user) {
    return jwt.sign(user, SECRET, { expiresIn: "1d" });
}

export function verificarToken(token) {
    try {
        return jwt.verify(token, SECRET);
    } catch {
        return null;
    }
}