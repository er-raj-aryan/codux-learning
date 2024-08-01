import styles from './App.module.scss';
import ViteSvg from './assets/vite.svg';
import TypescriptSvg from './assets/typescript.svg';
import { Button } from './components/button/button';
import Button_module from './components/button/button.module.scss';
import Classnames from 'classnames';

function App() {
    return (
        <div className={styles.App}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <h2>Just Creating Learning codux 🎉</h2>
            <span>
                Let&apos;s build latest stuff
                <br />
                &amp; How can we build cool tools <b>Elements</b> Panel
            </span>
            <p
                style={{
                    fontSize: '12px',
                    marginTop: '80px',
                    display: 'flex',
                    gap: '3px',
                    justifyContent: 'center',
                }}
            >
                This project is using <img src={ViteSvg} width="12" />+
                <img src={TypescriptSvg} width="12" />
                Visit vitejs.dev to learn more.
            </p>
            <Button handleClick={() => window.open('https://google.com', '_blank')}>
                <p className={styles.buttonText}>Click Me</p>
            </Button>
        </div>
    );
}

export default App;
