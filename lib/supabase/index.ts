// Only export the browser client from the index file
// This ensures it's safe to import anywhere
export {
  createBrowserClient,
  getSupabaseBrowserClient,
} from "./client"

