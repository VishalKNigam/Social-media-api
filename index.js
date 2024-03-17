const express = require('express');
// const { graphqlHTTP } = require('express-graphql');
// 
 
const { connectedDB } = require('./db');
// const { schema, resolvers } = require('./routes/graph.router');
const { userRouter } = require('./routes/user.router');
const { authMiddleware } = require('./middlewares/authenticate.middleware');
const { postRouter } = require('./routes/post.router');
const { relationshipRouter } = require('./routes/userRelationship.router');

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        res.send("Home-Page");
    } catch (error) {
        console.log(`Error:${error}`);
    }
});

app.use("/user", userRouter);

app.use(authMiddleware);
app.use("/post", postRouter);
app.use("/relation", relationshipRouter);
// Improvement needed;

// // GraphQL endpoint
// app.use('/graphql', graphqlHTTP({
//     schema,
//     rootValue: resolvers,
//     graphiql: true // Enable GraphiQL interface for testing
// }));

const port = process.env.PORT || 8080;
app.listen(port, async () => {
    try {
        await connectedDB;
        console.log("Database connected Successfully");
    } catch (err) {
        console.log(err.message);
    }
    console.log(`server is running on port ${port}`);
});
