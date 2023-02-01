import { Link } from "react-router-dom";
export default function NoMatch() {
  return (
    <div>
      <h2>组件加载错误</h2>
      <p>
        <Link to="/">返回首页</Link>
      </p>
    </div>
  );
}
