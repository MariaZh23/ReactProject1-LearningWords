import './Table.scss'
import wordsData from '../words-data.json';
import { useState } from 'react';

export default function Table() {
    const [editingRow, setEditingRow] = useState(null);
    const editBtn = (id) => {
        setEditingRow(id);
    };
    const saveBtn = () => {
        setEditingRow(null);
    };
    const cancelBtn = () => {
        setEditingRow(null);
    };

    return (
    <div className='table-container'>
    <table className='table-body'>
    <thead className='table-head'>
        <tr className='table-head-items'>
            <th className='table-col-number'>Номер</th>
            <th className='table-col-english'>Слово</th>
            <th className='table-col-transcription'>Транскрипция</th>
            <th className='table-col-russian'>Перевод</th>
            <th className='table-col-tags'>Тема</th>
            <th className='table-col-comments'>Комментарии</th>
            <th className='table-col-actions'>Действия</th> 
        </tr>
    </thead>
    <tbody>
        {wordsData.map((word) => (
            <tr key={word.id}>
                <td className='table-col-number'>{word.id}</td>
                <td className='table-col-english'>{word.english}</td>
                <td className='table-col-transcription'>{word.transcription}</td>
                <td className='table-col-russian'>{word.russian}</td>
                <td className='table-col-tags'>{word.tags}</td>
                <td className='table-col-comments'>{word.comments}</td>
                <td>
                {editingRow === word.id ? (
                    <div>
                    <button className='save-btn' onClick={saveBtn}></button>
                    <button className='cancel-btn' onClick={cancelBtn}></button>
                    </div>
                ) : (
                    <div>
                        <button className='edit-btn' onClick={() => editBtn (word.id)}></button>
                        <button className='delete-btn'></button>
                    </div>
                )}
                </td>
            </tr>
        ))}
    </tbody>
    </table>
    </div>
    )
}
