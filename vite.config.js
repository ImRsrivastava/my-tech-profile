import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import process from 'node:process'


export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(env.VITE_APP_PORT || 3000),
      host: '0.0.0.0',

      allowedHosts: [
        'tech-profile-alb-1629877846.us-east-1.elb.amazonaws.com',
        'tech-profile-alb-stage-1218853169.us-east-1.elb.amazonaws.com'
      ]
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/setupTests.js'
    }
  })
}