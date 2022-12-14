import styled from "styled-components";
import { connect } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import InfoContainer from "./Info/Container";
import LogInContainer from "./LogIn/Container";
import RegistContainer from "./Regist/Container";

const UserComponent = ({ userName }) => {
  return (
    <UserBox>
      <div>
        <Link to={"/"}>Home</Link>
        {userName ? (
          <></>
        ) : (
          <>
            {" "}
            | <Link to={"/regist"}>Regist</Link> |{" "}
            <Link to={"/login"}>Log In</Link>
          </>
        )}
      </div>
      {userName ? <InfoContainer /> : <></>}
      <Routes>
        <Route path="/regist" element={<RegistContainer />}></Route>
        <Route path="/login" element={<LogInContainer />}></Route>
      </Routes>
    </UserBox>
  );
};

const mapStateToProps = (state, props) => {
  return { userName: state.userInfo.userName };
};

export default connect(mapStateToProps)(UserComponent);

const UserBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;
