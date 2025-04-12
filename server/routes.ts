import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // This is a static website, so we don't need any API routes
  // All routes will be handled by the frontend
  
  const httpServer = createServer(app);
  return httpServer;
}
