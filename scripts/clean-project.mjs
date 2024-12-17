import { promises as fs } from "fs";
import path from "path";

async function deleteNodeModulesAndLockFile(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && entry.name === "node_modules") {
      console.log(`Deleting directory: ${fullPath}`);
      await fs.rm(fullPath, { recursive: true, force: true });
    } else if (entry.isFile() && entry.name === "pnpm-lock.yaml") {
      console.log(`Deleting file: ${fullPath}`);
      await fs.unlink(fullPath);
    } else if (entry.isDirectory()) {
      await deleteNodeModulesAndLockFile(fullPath);
    }
  }
}

async function main() {
  try {
    await deleteNodeModulesAndLockFile(process.cwd());
    console.log(
      "All node_modules directories and pnpm-lock.yaml files have been deleted."
    );
  } catch (error) {
    console.error("Error deleting files:", error);
  }
}

main();
