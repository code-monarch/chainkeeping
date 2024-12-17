'use client';

import { useEffect } from 'react';
import Rollbar from 'rollbar';
import { ResetPage } from '@/pattern/common/organisms/reset-page';
import { clientConfig } from '@/lib/utils/rollbar';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {

    useEffect(() => {
        const rollbar = new Rollbar(clientConfig)
        rollbar.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <ResetPage reset={reset} />;
            </body>
        </html>
    );
}