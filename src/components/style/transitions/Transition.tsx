import { CSSTransition } from "react-transition-group";
import "../../../app.css";

type TransitionWrapperProps = {
  children: JSX.Element;
  inProp: boolean;
  ref: React.RefObject<HTMLDivElement>;
};

export default function TransitionWrapper({
  children,
  inProp,
  ref,
}: TransitionWrapperProps) {
  return (
    <CSSTransition
      in={inProp}
      nodeRef={ref}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <div ref={ref}>{children}</div>
    </CSSTransition>
  );
}
