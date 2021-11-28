import { Header } from "../shared/Header";

interface Props {
  className: string;
}

export const BaseLayout: React.FC<Props> = ({ children, className }) => (
  <div className="layout-container">
    <Header />
    <main className={`cover ${className}`}>
      <div className="wrapper">{children}</div>
    </main>
  </div>
);
