import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: [
      'a6e1ed86becdc474aa98c30ea66f63c4-359446609.eu-north-1.elb.amazonaws.com:3000'
    ]
  }
})
