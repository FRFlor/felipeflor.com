/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

interface ImportMetaEnv {
    readonly VITE_VITE_FEATURE_FLAG_THEME_MODES: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}