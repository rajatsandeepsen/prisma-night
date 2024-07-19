import { prisma } from "./client";


const customer = await prisma.customer.delete({
    where: {
        id: "1234567890"
    },
})

console.log(customer)

