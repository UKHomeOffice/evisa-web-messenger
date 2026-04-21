import { Routes, Route } from 'react-router';
import ViewCookies from './components/cookies/view-cookies';
import AccessibilityStatement from './components/accessibility/statement';
import NotFound from './routes/not-found';
import EndChatConfirmation from './components/chat/end-chat-confirmation';
import { ErrorBoundary } from './error/error-boundary';
import Evisa from './routes/index';

export function App() {

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Evisa />} />
        <Route path="/cookies" element={<ViewCookies />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
        <Route path="/end-chat-confirmation" element={<EndChatConfirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}
