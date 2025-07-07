import express, { Request, Response, NextFunction } from 'express';
import rateLimiter from './middlewares/rateLimitMiddleware';
import cors from 'cors';
import { Config } from './config/config';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { adminAuthRouter } from './routes/auth/adminAuthRoute';
import { adminRouter } from './routes/admin/adminRoutes';
import { projectAuthRouter } from './routes/auth/projectAuthRoute';

const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);
app.use(cors({ origin: Config.corsAllowedOrigin }));

// CORS headers (redundant with `cors()` middleware, but harmless)
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Socket.io setup
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Routes
const route = "/api/v1";

// Home route
app.get('/', (_req: Request, res: Response) => {
    return res.send('LEGASI App Started');
});

// Only respond to EXACT `/api/v1` (not subroutes)
app.get(`${route}`, (_req: Request, res: Response) => {
    return res.send('LEGASI App Backend Started');
});

// Mount sub-routes (e.g., auth, users, etc.)
app.use(`${route}/auth`, adminAuthRouter);
app.use(`${route}/auth/project-manager`, projectAuthRouter);

app.use(`${route}/admin`, adminRouter);

// Add this after all your routes but before the 404 handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
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
export default app;