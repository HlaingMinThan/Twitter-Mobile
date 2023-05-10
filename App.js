import React from 'react'
import { AuthProvider } from './contexts/AuthProvider'
import Root from './Root';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
          <Root/>
      </AuthProvider>
    </TailwindProvider>
  )
}
