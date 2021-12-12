import { Header } from "components/shared/Header";

interface Props {
  user: any;
  loading: boolean;
  className?: string;
}

export const BaseLayout: React.FC<Props> = ({
  user,
  loading,
  children,
  className = "",
}) => (
  <div className="layout-container">
    <Header user={user} loading={loading} />
    <main className={`cover ${className}`}>
      <div className="wrapper">{children}</div>
    </main>
  </div>
);
