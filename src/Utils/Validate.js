export const validateData = (email, password) =>{

    const validMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if(!validMail) return "Email is not valid"
    if(!validPassword) return "Password is not valid"

    if(validMail && validPassword) return null
}