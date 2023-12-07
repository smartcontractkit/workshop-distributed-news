// Import necessary modules from ethers library
import { ethers, JsonRpcProvider } from "ethers";
// Import the dotenv module to load environment variables
import { config } from "dotenv";

// Import the ABI of the NewsArchive contract
import NewsArchiveABI from "./newsArchiveABI.json";

// Load environment variables from .env file
config();

// Get provider URL and contract address from environment variables
const providerUrl = process.env.PROVIDER_URL;
const contractAddress = process.env.CONTRACT_ADDRESS;

// Create a new JSON-RPC provider
const provider = new JsonRpcProvider(providerUrl);

// Create a new contract instance with the NewsArchive ABI
const newsArchiveContract = new ethers.Contract(
  contractAddress,
  NewsArchiveABI,
  provider
);

// Define an async function to get all articles from the contract
async function getAllArticles() {
  try {
    // Call the getAllArticles function of the contract
    const articles = await newsArchiveContract.getAllArticles();
    // Return the articles
    return articles;
  } catch (error) {
    // Log the error and return an empty array
    console.error("Error fetching articles:", error);
    return [];
  }
}

// Export the getAllArticles function as the default export
export default getAllArticles;
