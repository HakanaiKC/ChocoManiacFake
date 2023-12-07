import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";
import err from "../../assets/err/Err.svg";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="error"
      style={{
        textAlign: "center",
        marginTop: "48px",
        padding: "20px",
        backgroundColor: "#f3ede1",
      }}
    >
      <img src={err} alt="Error" />
      <p style={{ fontSize: "30px" }}>
        Sorry, the page you visited does not exist.
      </p>
      <Button size="large" onClick={() => navigate("/")}>
        Home
      </Button>
    </div>
  );
};

export default ErrorPage;
