//
const isLogin = false;
const Login = <h1>Welcome Viththiyakaran</h1>;

const JSX = () => {
  return <div>{isLogin ? Login : <span>Sorry</span>}</div>;
};

export default JSX;

//Logical &&
// const isLogin = true;
// const Login = <h1>Welcome</h1>;

// const JSX = () => {
//   return (
//     <div>
//       {isLogin && (
//         <>
//           <p>Welcome</p> {username}
//         </>
//       )}
//     </div>
//   );
// };

// export default JSX;
