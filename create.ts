import { prisma } from "./client";


const users = await prisma.user.createManyAndReturn({
    data: {
        name: "Alice",
        email: "Alice@gmail.com",
        id: "1234567890",
        createdAt: new Date(),
    }
})

console.log(users)
