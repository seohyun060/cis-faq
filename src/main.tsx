import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <GlobalStyles />
        <App />
    </BrowserRouter>
);
