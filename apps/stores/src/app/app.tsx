import styles from './app.module.less';
import NxWelcome from './nx-welcome';

// nx会自动在tsconfig.base.json生成路径
import { Header } from '@stores/header';
// 这种也可以，但是推荐上面这种
// import { Header } from 'libs/header/src';

export function App() {
  return (
    <>
      <Header />
      <NxWelcome title="stores" />
      <div />
    </>
  );
}

export default App;
