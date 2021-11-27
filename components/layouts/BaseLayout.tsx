import { Header } from "../shared/Header";

export const BaseLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
