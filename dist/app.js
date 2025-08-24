"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rateLimitMiddleware_1 = __importDefault(require("./middlewares/rateLimitMiddleware"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const adminAuthRoute_1 = require("./routes/auth/adminAuthRoute");
const adminRoutes_1 = require("./routes/admin/adminRoutes");
const projectAuthRoute_1 = require("./routes/auth/projectAuthRoute");
const project_managerRoutes_1 = require("./routes/project_manager/project_managerRoutes");
const miscRoutes_1 = require("./routes/miscRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(rateLimitMiddleware_1.default);
app.use((0, cors_1.default)({ origin: config_1.Config.corsAllowedOrigin }));
// CORS headers (redundant with `cors()` middleware, but harmless)
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// Socket.io setup
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer);
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
// Routes
const route = "/api/v1";
// Home route
app.get('/', (_req, res) => {
    return res.send('LEGASI App Started');
});
// Only respond to EXACT `/api/v1` (not subroutes)
app.get(`${route}`, (_req, res) => {
    return res.send('LEGASI App Backend Started');
});
// Mount sub-routes (e.g., auth, users, etc.)
app.use(`${route}/auth`, adminAuthRoute_1.adminAuthRouter);
app.use(`${route}/auth/project-manager`, projectAuthRoute_1.projectAuthRouter);
app.use(`${route}/admin`, adminRoutes_1.adminRouter);
app.use(`${route}/project-manager`, project_managerRoutes_1.projectRouter);
app.use(`${route}`, miscRoutes_1.miscRouter);
// Add this after all your routes but before the 404 handler
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).json({
            success: false,
            error: 'Invalid JSON',
            message: 'The request contains invalid JSON'
        });
    }
    next(err);
});
// Then your 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Not Found',
        message: `The requested resource ${req.url} was not found`
    });
});
exports.default = app;
