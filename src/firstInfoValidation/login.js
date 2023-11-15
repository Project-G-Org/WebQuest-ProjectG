function validation(username, password){
    const errors = []

    if (!username || username === null) { // TODO transform into validation function
        errors.push({ text: "Usuário Não Foi Inserido" });
    }

    if (!password || password === null) {
        errors.push({ text: "Senha Não Foi Inserida" });
    }

    return(errors);
};

export default validation;