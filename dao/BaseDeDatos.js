var attendance = require("../models/user.js");

class ErrorEmailAlreadyExists extends Error {
    
    constructor() {
        
        super();
        this.name = 'Error: ya existe un usuario con el mismo email.';
        Error.captureStackTrace(this, this.constructor);
    }
}

class BaseDeDatos {

    constructor(){
        this.userModel = attendance;
    }

    async user_email_exists(email) {

        return this.userModel
                    .findOne({ email: email })
                    .select("email")
                    .lean()
                    .then(result => {
                        console.log(result);
                        return result != null;
                    });
    }

    async add_user(email, date, course, image) {
        
        if (await this.user_email_exists(email)){
            console.log("Error: " + email + " ya existe.");
            throw new ErrorEmailAlreadyExists();
        }
        
        console.log("Alumno nuevo, se agrega a la lista.");
        const obj = JSON.stringify({email: email, date: date, course:course, image:image});
        const user_structure = new this.userModel(JSON.parse(obj));
        user_structure.save();
        return user_structure;


    }

    async edit_user(email, date, course, image) {

        try {            
            if(email === '') {email = null;}
            if(date === '') {date = null;}
            if(course === '') {course = null;}
            if(image === '') {image = null;}

            let email_is_empty = (email === null);
            let date_is_empty = (date === null);
            let course_is_empty = (course === null);
            let image_is_empty = (image === null);


            if (email_is_empty) {
                console.log("Error: email vacío.");
                throw new ErrorFieldIsEmpty("email");
            }

            if (date_is_empty) {
                console.log("Error: fecha vacía.");
                throw new ErrorFieldIsEmpty("date");
            }
            
            if (course_is_empty) {
                console.log("Error: curso vacío.");
                throw new ErrorFieldIsEmpty("course");
            }
           
            if (image_is_empty) {
                console.log("Error: imagen vacía.");
                throw new ErrorFieldIsEmpty("image");
            }
            
            if (await this.user_email_exists(email)){
                console.log("Error: " + email + " ya existe.");
                throw new ErrorEmailAlreadyExists();
            }

            const obj = JSON.stringify({email: email, date: date, course:course, image:image});
            let user_structure = new this.userModel(JSON.parse(obj));

            await this.userModel.findByIdAndUpdate(id, JSON.parse(obj), {new: true},  function (err, user_structure) {
                if (err){
                    console.log("Error: " + err.toString());
                } else{
                    console.log("ID del usuario actualizado: ", id);
                }
            }).clone();
            return user_structure;
        } catch (e){
            if (e instanceof ErrorFieldIsEmpty || e instanceof ErrorEmailAlreadyExists) {
                throw e;
            }
            throw new ErrorEmailAlreadyExists(); // ??
        }
    }
}

module.exports = BaseDeDatos;

