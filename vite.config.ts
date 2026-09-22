import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
export default defineConfig(({ command })=>({
  plugins:[react()],
  base: command==='build'?'/embedded-git-lab/':'/',
  test:{ environment:'node' }
}))
