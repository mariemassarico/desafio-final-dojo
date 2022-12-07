let faker = require('faker-br')

//Módulo

export default {

    cadastroUsuario: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        let data = {

            name: `${firstName} ${lastName}`,
            email: faker.internet.email(firstName),
            password: '123456@1',
            

        }
        return data

    }

}