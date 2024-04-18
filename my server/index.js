const express = require("express");
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 1128;
const http = require('http');
const server = http.createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

// Import routes
const showsRoutes = require("./routes/shows.routes");
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user.routes");
const exploreRoutes = require("./routes/explore.routes");
const allnftRoutes = require("./routes/allnft.routes");
const paymentRoutes = require('./routes/payment.routes');
const commentRoutes = require ('./routes/comment.routes')
const commentsRoutes = require('./routes/comments.routes');

// WebSocket server logic
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    })
  })
})
 
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors());

// Routes
app.use("/api/shows", showsRoutes);
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use("/api/explore", exploreRoutes);
app.use("/api/allnft", allnftRoutes);
app.use("/api/payment", paymentRoutes);
app.use('/api/comment', commentRoutes)
app.use("/api/comment", commentsRoutes);

// Start the server
server.listen(PORT, function () {
  console.log("listening on port " + PORT);
});

// Close Prisma connection on SIGTERM
process.on('SIGTERM', () => {
  prisma.$disconnect();
});

module.exports = app;
