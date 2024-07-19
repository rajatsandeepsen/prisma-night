import { prisma } from "./client";



const users = await prisma.user.count()
console.log(users)



















// const customers = await prisma.customer.findMany()
// console.log(customers)



