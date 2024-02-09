import React from 'react';

import ListCatalogs from './catalogs/list';
import EditCatalog from './catalogs/edit';

const useRouter = () => {
    const [page, setPage] = React.useState('catalogs/list');
    const [params, setParams] = React.useState({});

    const navigate = React.useCallback((page, params) => {
        setPage(page);
        setParams(params);
    }, [setPage, setParams]);

    return React.useMemo(() => ({
        page, params, navigate
    }), [page, params, navigate]);
};

export default () => {
    const router = useRouter();

    if (router.page === 'catalogs/list') {
        return (
            <ListCatalogs router={router} />
        );
    }

    if (router.page === 'catalogs/edit') {
        return (
            <EditCatalog router={router} />
        );
    }
};
