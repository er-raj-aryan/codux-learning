import { createBoard } from '@wixc3/react-board';
import { Image } from '../../../components/image/image';

export default createBoard({
    name: 'Image',
    Board: () => <Image />,
    isSnippet: true,
});