declare module 'imgur' {
  interface Result {
    data: {
      link: string
    }
  }

  interface Mod {
    uploadBase64(data: string): Promise<Result>
    uploadImages(images: string[], type: 'File' | 'Url' | 'Base64'): Promise<Result[]>
  }

  const mod: Mod
  export = mod
}
