import { Account, Client } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!);
if (!process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || !process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID) {
  throw new Error("Missing Appwrite ENV variables. Check your .env file.");
}

export const account = new Account(client);
