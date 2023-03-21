import style from './Container.module.scss';

type ContainerProps = {
  children: JSX.Element,
};

const Container: React.FC<ContainerProps> = (props) => {

  const {children} = props;

  return (
    <div className={style.root}>
      {children}
    </div>
  )
};

export default Container;