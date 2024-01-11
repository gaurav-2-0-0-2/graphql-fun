import {prisma} from "../database"

export const resolvers = {

	Query: {

		books: (parent, args) => {
      return prisma.book.findMany({});
    },
    }
}
