import { prisma } from "./client";

const res = await prisma.$transaction(async (tx) => {
    
    const user = await tx.user.findFirst({
        where: {
            id: "clxbmtxyw0002yq82v9ky55ho"
        }
    })

    if (user) {
        await tx.customer.create({
            data: {
                

            }
        })
        
    }
})