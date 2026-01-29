// SSH private keys must not be committed to source control.
// Provide the private key via a secure mechanism (for example, environment variables or a secret manager).
export const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '';
