#!/usr/bin/env node
/**
 * GitHub Pages Configurator for Next.js
 *
 * 1. Prompts for the GitHub repository name
 * 2. Updates next.config.ts with correct `basePath` and `assetPrefix`
 * 3. Prints clear instructions for enabling GitHub Pages
 * 4. Adds helpful tips to complete the deployment process
 

import fs from "fs";
import path from "path";
import readline from "readline";

const CONFIG_FILE = "next.config.ts";

/**
 * Create readline interface
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


 * Ask a single question and return the answer as a Promise
 
function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));


  }
  
 * Extract repository slug from user input.
 * Accepts “user/repo” or “repo” and always returns “repo”.
 */
/*
function repoSlug(input: string): string {
  const parts = input.trim().split("/");
  return parts[parts.length - 1];
}




 * Update or insert a configuration property within an exported object.
 
function upsertConfigContent(
  content: string,
  key: string,
  value: string
): string {
  const regex = new RegExp(`${key}\\s*:\\s*['"\`].*?['"\`]`, "m");

  if (regex.test(content)) {
    // Property exists, replace its value
    return content.replace(regex, `${key}: '${value}'`);
  }

  // Attempt to insert into existing config object
  // Look for the first opening brace after `=` or `export`
  const objectStartMatch =
    content.match(/(const\s+\w+\s*=\s*{)/m) ||
    content.match(/(module\.exports\s*=\s*{)/m);

  if (!objectStartMatch) {
    // Fallback: append export block if none found
    return (
      content +
      `\n\n// Added by GitHub Pages Configurator\nconst nextConfig = {\n  ${key}: '${value}',\n};\n\nexport default nextConfig;\n`
    );
  }

  const insertionIndex = objectStartMatch.index! + objectStartMatch[1].length;
  return (
    content.slice(0, insertionIndex) +
    `\n  ${key}: '${value}',` +
    content.slice(insertionIndex)
  );
}


 * Main execution flow
 
async function main() {
  console.log("\n=== Next.js GitHub Pages Configurator ===\n");

  const repoInput = await ask("1️⃣  Enter your GitHub repository (user/repo or repo): ");
  const repo = repoSlug(repoInput);

  if (!repo) {
    console.error("❌  Invalid repository name. Aborting.");
    rl.close();
    process.exit(1);
  }

  const prefix = `/${repo}`;

  const configPath = path.resolve(process.cwd(), CONFIG_FILE);

  if (!fs.existsSync(configPath)) {
    console.error(`❌  ${CONFIG_FILE} not found in ${process.cwd()}.`);
    console.error("    Please run this script from the root of your Next.js project.\n");
    rl.close();
    process.exit(1);
  }

  let content = fs.readFileSync(configPath, "utf-8");

  content = upsertConfigContent(content, "basePath", prefix);
  content = upsertConfigContent(content, "assetPrefix", prefix);

  fs.writeFileSync(configPath, content, "utf-8");

  console.log(`\n✅  Updated ${CONFIG_FILE} with:\n   basePath: '${prefix}'\n   assetPrefix: '${prefix}'\n`);

  console.log("📄  Next steps:");
  console.log(`   1. Commit and push the changes:\n      git add ${CONFIG_FILE}\n      git commit -m "Configure GitHub Pages"\n      git push`);
  console.log("   2. In your GitHub repository:");
  console.log("      • Navigate to Settings ➜ Pages");
  console.log('      • Set "Build and deployment source" to "Deploy from a branch"');
  console.log('      • Select the "gh-pages" branch (or "main" with /docs folder if using that strategy)');
  console.log("      • Save the settings (GitHub will provide the URL)");
  console.log("   3. Build & export your Next.js project:");
  console.log("      npm run build && npm run export");
  console.log("      # Ensure your `out` directory is committed to the gh-pages branch or deployed via GitHub Actions.\n");

  console.log("💡  Tips:");
  console.log("   • Use `next export` to generate static files in the `out` directory.");
  console.log("   • Consider automating deployments with a GitHub Action (e.g., `peaceiris/actions-gh-pages`).");
  console.log("   • Ensure any asset URLs (images, CSS) are using relative paths or the configured assetPrefix.");
  console.log("   • After the first deployment, your site will be available at:");
  console.log(`     https://<your-username>.github.io/${repo}/\n`);

  console.log("🎉  All set! Happy deploying 🚀\n");
  rl.close();
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  rl.close();
  process.exit(1);
});
*/

