import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <section className={classes.loading}>
      <span className={classes.one}></span>
      <span className={classes.two}></span>
      <span className={classes.three}></span>
    </section>
  );
};

export default Loading;
