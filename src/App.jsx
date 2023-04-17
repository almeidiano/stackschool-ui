import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginAs from './pages/loginAs';
import Login from './pages/login';

export default function App() {
    return (
        <Router>
            <Routes>    
                <Route path="/" element={<LoginAs />} />
                <Route path="/student/login" element={<Login title='Área do aluno' illustration='../book-lover.svg' />} />
                <Route path="/teacher/login" element={<Login title='Área do professor' illustration='../teacher-lover.svg' />} />
                <Route path="/admin/login" element={<Login title='Área administrativa' illustration='../admin-lover.svg' admin={true} />} />
                <Route path="*" element={<LoginAs />} />
            </Routes>
        </Router>
    )
}