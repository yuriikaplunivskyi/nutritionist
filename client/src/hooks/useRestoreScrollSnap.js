import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useRestoreScrollSnap() {
    const location = useLocation();

    useEffect(() => {
        const restoreScrollSnap = () => {
        document.body.style.scrollSnapType = 'y mandatory';
        };

        window.addEventListener('popstate', restoreScrollSnap);

        return () => {
        window.removeEventListener('popstate', restoreScrollSnap);
        };
    }, [location]);
}

export default useRestoreScrollSnap;
