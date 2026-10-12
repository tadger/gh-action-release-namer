declare module '*.txt' {
  const content: string
  // biome-ignore lint/style/noDefaultExport: esbuild text loader exposes the file as the default export
  export default content
}
