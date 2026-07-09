import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import { AppRoutes } from './routes';

function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-surface">
          <AppRoutes />
        </div>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
