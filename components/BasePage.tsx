import { Container } from "reactstrap";

interface Props {
  className?: string;
}

export const BasePage: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`base-page ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};
