import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Импортируем state и функции. Нам нужно будет изменить state.ts,
// чтобы он экспортировал нашу функцию рендеринга.
import state, { addPost, updateNewPostText, subscribe } from './redux/state'
import { BrowserRouter } from "react-router-dom"


// createRoot(document.getElementById('root')!).render(
//     <StrictMode>
//         <BrowserRouter>
//             <App state={ state } addPost={ addPost } updateNewPostText={ updateNewPostText } />
//         </BrowserRouter>
//     </StrictMode>,
// )


// Находим корневой элемент
const container = document.getElementById('root');

// Убеждаемся, что элемент существует перед созданием корня
if (!container) {
    throw new Error('Root element #root not found in the DOM.');
}

const root = createRoot(container);

// Определяем функцию рендеринга, которую мы будем вызывать для обновления всего дерева
const rerenderEntireTree = () => {
    // Вызываем метод render на созданном корне React
    root.render(
        <StrictMode>
            <BrowserRouter>
                {/* Передаем текущее актуальное состояние и функции в App */}
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>
        </StrictMode>,
    );
};

// Подписываемся на изменения в файле state.ts.
// Теперь при любом изменении состояния (например, при добавлении поста),
// будет вызвана функция rerenderEntireTree, которая запустит обновление.
subscribe(rerenderEntireTree);

// Первый вызов для первоначального рендера
rerenderEntireTree();
