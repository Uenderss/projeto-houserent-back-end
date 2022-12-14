import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: faker.name.fullName(),
            password:faker.internet.password(),
            email: faker.internet.email(),
            phone: faker.phone.number('+55 32 #### ####'),
            cellphone: faker.phone.number('+55 32 #### #####'),
            cpf: faker.phone.number('###########'),
            address: {
                create:{
                    state:faker.address.state(),
                    country: faker.address.country(),
                    district: faker.address.cityName(),
                    suburb: faker.address.city(),
                    street: faker.address.street(),
                    number: faker.random.numeric(),
                    complement: faker.company.name(),
                    zipCode: faker.address.zipCode(),
                    referencePoint: faker.company.catchPhraseAdjective(),
                },
            },

        },
    });
    console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })