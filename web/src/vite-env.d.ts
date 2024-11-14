/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_REACT_APP_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
