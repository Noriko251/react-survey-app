import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.SIGNIN_USERNAME': JSON.stringify(env.SIGNIN_USERNAME),
      'process.env.SIGNIN_PASSWORD': JSON.stringify(env.SIGNIN_PASSWORD)
    },
    base: "/react-survey-app/",
    plugins: [react()],
  }
})
