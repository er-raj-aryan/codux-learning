import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'Button',
    Board: () => <Button />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 59.67226387260619,
    },
});
