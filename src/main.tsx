import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.ts';
import './i18n';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <GlobalStyles />
        <App />
    </BrowserRouter>
);
