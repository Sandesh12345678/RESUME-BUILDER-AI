import "dotenv/config";

export const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET || "resume-builder-fallback-secret";

  if (!process.env.JWT_SECRET) {
    console.warn("JWT_SECRET is not set. Using fallback secret for authentication.");
  }

  return secret;
};
