const isLogin = true;
const Login = <h1>Welcome</h1>;

const JSX = () => {
  return (
    <div>
      {isLogin && (
        <>
          <p>Welcome</p> {username}
        </>
      )}
    </div>
  );
};

export default JSX;
