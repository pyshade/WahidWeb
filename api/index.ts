import "dotenv/config";
import serverless from "serverless-http";
import { createServer } from "../server/index";

// Create the Express app
const app = createServer();

// Export the serverless handler
export default serverless(app);
