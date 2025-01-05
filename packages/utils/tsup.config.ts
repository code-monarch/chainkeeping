import { defineConfig } from 'tsup';

export default defineConfig((options: any) => ({
    treeshake: true,
    splitting: true,
    entry: ["./src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    minify: true,
    clean: true,
    ...options,
}))
