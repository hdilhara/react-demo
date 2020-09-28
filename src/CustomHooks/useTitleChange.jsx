import { useEffect } from 'react';

export default function useTitleChange(title, changeOn) {
    useEffect(() => { document.title = title; }, [changeOn]);

}